import { getProductById } from '@/data/products';
import type { ValidationResult } from '@/types';

// =============================================================================
// HASH-BASED VALIDATION SYSTEM
// =============================================================================
// Code format: TZ001-XXXXXXXXXX
// - Prefix: Product code (TZ001, SM001, ND001, SR001)
// - Suffix: 10-char hash derived from (SECRET + PREFIX + SERIAL_NUMBER)
//
// This ensures:
// 1. Only codes generated with the secret can be valid
// 2. Each code has a unique serial number embedded
// 3. Codes cannot be guessed or generated without the secret
// =============================================================================

// Secret seed for hash generation (in production, this would be more complex)
const SECRET_SEED = 'W1NST0NS_PH4RM4CY_2024_S3CR3T_K3Y';

// Product code mapping
const PRODUCT_CODE_MAP: Record<string, string> = {
  'TZ001': 'tirzepatide-niacinamide',
  'SM001': 'semaglutide-cyanocobalamin',
  'ND001': 'nad-injection',
  'SR001': 'sermorelin-acetate',
};

// Code format pattern
const CODE_PATTERN = /^([A-Z]{2}\d{3})-([A-Z0-9]{10})$/;

// Valid serial number range (00001 to 99999)
const MIN_SERIAL = 1;
const MAX_SERIAL = 99999;

/**
 * Simple hash function for browser compatibility
 * Generates a deterministic hash from input string
 */
function simpleHash(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Additional mixing for better distribution
  hash = Math.abs(hash);
  let result = '';
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars (0,O,1,I)

  // Generate 10 characters from the hash
  let temp = hash;
  for (let i = 0; i < 5; i++) {
    result += chars[temp % chars.length];
    temp = Math.floor(temp / chars.length) + hash + i * 7919; // Prime mixing
  }

  // Second pass with different seed
  temp = hash * 31 + 17;
  for (let i = 0; i < 5; i++) {
    result += chars[Math.abs(temp) % chars.length];
    temp = Math.floor(temp / chars.length) + hash + i * 6271;
  }

  return result.substring(0, 10);
}

/**
 * Generate the expected hash for a given product code and serial number
 */
function generateHash(productCode: string, serialNumber: number): string {
  const paddedSerial = serialNumber.toString().padStart(5, '0');
  const input = `${SECRET_SEED}:${productCode}:${paddedSerial}`;
  return simpleHash(input);
}

/**
 * Extract serial number from a hash (reverse lookup)
 * Returns the serial number if found, or null if not valid
 */
function findSerialFromHash(productCode: string, hash: string): number | null {
  // Search through valid serial numbers to find a match
  // For performance, we limit the search range
  for (let serial = MIN_SERIAL; serial <= MAX_SERIAL; serial++) {
    if (generateHash(productCode, serial) === hash) {
      return serial;
    }
  }
  return null;
}

/**
 * Sanitize and normalize the input code
 */
function sanitizeCode(input: string | null | undefined): string {
  if (!input) return '';
  try {
    return decodeURIComponent(input).trim().toUpperCase();
  } catch {
    return input.trim().toUpperCase();
  }
}

/**
 * Parse the code into prefix and suffix parts
 */
function parseCode(code: string): { prefix: string; suffix: string } | null {
  const match = code.match(CODE_PATTERN);
  if (!match) return null;
  return {
    prefix: match[1],
    suffix: match[2],
  };
}

/**
 * Main validation function
 * Validates the drug serial code and returns product information if valid
 */
export function validateDrugCode(rawCode: string): ValidationResult {
  try {
    // 1. Sanitize input
    const code = sanitizeCode(rawCode);

    // 2. Check for empty code
    if (!code) {
      return {
        status: 'invalid',
        code: rawCode || '',
        message: 'No code provided',
      };
    }

    // 3. Parse and validate format
    const parsed = parseCode(code);
    if (!parsed) {
      return {
        status: 'invalid',
        code,
        message: 'Invalid code format. Please check the code and try again.',
      };
    }

    // 4. Check if product code is valid
    const productId = PRODUCT_CODE_MAP[parsed.prefix];
    if (!productId) {
      return {
        status: 'invalid',
        code,
        message: 'Unknown product code. This code does not match any registered product.',
      };
    }

    // 5. Verify hash by finding the serial number
    const serialNumber = findSerialFromHash(parsed.prefix, parsed.suffix);
    if (serialNumber === null) {
      return {
        status: 'invalid',
        code,
        message: 'Code verification failed. This code may be counterfeit or tampered with.',
      };
    }

    // 6. Look up product details
    const product = getProductById(productId);
    if (!product) {
      return {
        status: 'invalid',
        code,
        message: 'Product not found in our database.',
      };
    }

    // 7. All checks passed - return valid result with product info
    return {
      status: 'valid',
      code,
      message: 'Code verified successfully',
      product: {
        id: product.id,
        name: product.name,
        dosageStrengths: product.dosageStrengths,
      },
    };
  } catch (error) {
    return {
      status: 'invalid',
      code: rawCode || '',
      message: 'An error occurred during validation. Please try again.',
    };
  }
}

// =============================================================================
// CODE GENERATION UTILITIES (for internal use)
// =============================================================================

/**
 * Generate a valid code for a product with a specific serial number
 * @param productCode - Short product code (TZ001, SM001, ND001, SR001)
 * @param serialNumber - Serial number (1-99999)
 */
export function generateCode(productCode: string, serialNumber: number): string {
  const upperCode = productCode.toUpperCase();

  if (!PRODUCT_CODE_MAP[upperCode]) {
    throw new Error(`Invalid product code: ${productCode}`);
  }

  if (serialNumber < MIN_SERIAL || serialNumber > MAX_SERIAL) {
    throw new Error(`Serial number must be between ${MIN_SERIAL} and ${MAX_SERIAL}`);
  }

  const hash = generateHash(upperCode, serialNumber);
  return `${upperCode}-${hash}`;
}

/**
 * Generate multiple codes for a product
 * @param productCode - Short product code
 * @param startSerial - Starting serial number
 * @param count - Number of codes to generate
 */
export function generateCodeBatch(
  productCode: string,
  startSerial: number,
  count: number
): Array<{ serial: number; code: string }> {
  const codes: Array<{ serial: number; code: string }> = [];

  for (let i = 0; i < count; i++) {
    const serial = startSerial + i;
    if (serial > MAX_SERIAL) break;

    codes.push({
      serial,
      code: generateCode(productCode, serial),
    });
  }

  return codes;
}

/**
 * Get all valid product codes
 */
export function getValidProductCodes(): string[] {
  return Object.keys(PRODUCT_CODE_MAP);
}

/**
 * Get product name from product code
 */
export function getProductNameFromCode(productCode: string): string | null {
  const productId = PRODUCT_CODE_MAP[productCode.toUpperCase()];
  if (!productId) return null;
  const product = getProductById(productId);
  return product?.name || null;
}
