# Drug Serial Code Validation Page - Implementation Plan

## Overview

Create a medication authenticity validation page at `/validate` that validates drug serial codes from QR codes on packaging. The validation is performed 100% on the front-end using a local algorithm (no API/database).

---

## Page Route & Metadata

- **Route**: `/validate` (accessible via `?code=` URL parameter)
- **Title**: "Medication Authenticity Validation | Winston's Pharmacy"
- **Meta Description**: "Verify the authenticity of your Winston's Pharmacy medication using the QR Code on the packaging."

---

## Files to Create

```
src/
  app/
    validate/
      page.tsx                      # Server component with metadata + Suspense wrapper
  components/
    validation/
      DrugCodeValidator.tsx         # Main client component with state machine
      ValidationStates.tsx          # All validation state UI components
      QRScannerGuide.tsx            # No-code state: QR scanner visual guide
      CodeDisplay.tsx               # Code display block with copy functionality
  lib/
    drugValidation.ts               # Pure validation logic functions
  types/
    index.ts                        # Add validation types (modify existing)
```

---

## Validation States

The page has 4 main states (simplified - no suspicious state):

| State | Trigger | UI |
|-------|---------|-----|
| **no-code** | No `?code=` parameter | QR scanner guide |
| **loading** | Code present, validating | Loading spinner |
| **valid** | Code passes validation | Green success card with product info |
| **invalid** | Code fails validation | Red error card |
| **technical-error** | Unexpected error | Neutral error card |

---

## Component Architecture

### 1. Page Component (`/src/app/validate/page.tsx`)

```tsx
// Server component with metadata
// Wraps DrugCodeValidator in Suspense for useSearchParams
export const metadata: Metadata = {
  title: 'Medication Authenticity Validation',
  description: 'Verify the authenticity of your Winston's Pharmacy medication...',
};

export default function ValidatePage() {
  return (
    <>
      <section className="bg-white px-6 pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[740px] text-center">
          <h1>Validate your medication code</h1>
          <p>Use the QR Code on the packaging to verify...</p>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 md:px-12 lg:px-24 lg:pb-24">
        <div className="mx-auto max-w-[640px]">
          <Suspense fallback={<LoadingSkeleton />}>
            <DrugCodeValidator />
          </Suspense>
        </div>
      </section>

      {/* Fixed bottom section: Where to find QR Code */}
      <QRLocationGuide />
    </>
  );
}
```

### 2. Main Validator Component (`DrugCodeValidator.tsx`)

```tsx
'use client';

// State management following ContactForm.tsx pattern
const [validationState, setValidationState] = useState<ValidationState>('no-code');
const [result, setResult] = useState<ValidationResult | null>(null);
const [copiedFeedback, setCopiedFeedback] = useState(false);

// URL parameter handling
const searchParams = useSearchParams();
const code = searchParams.get('code');

// Auto-validate on mount if code present
useEffect(() => {
  if (code) {
    setValidationState('loading');
    // Simulate brief delay for UX
    setTimeout(() => {
      const result = validateDrugCode(code);
      setResult(result);
      setValidationState(result.status);
    }, 800);
  }
}, [code]);

// Render state-specific UI
switch (validationState) {
  case 'no-code': return <QRScannerGuide />;
  case 'loading': return <LoadingState />;
  case 'valid': return <ValidState result={result} />;
  case 'invalid': return <InvalidState code={code} />;
  case 'suspicious': return <SuspiciousState code={code} />;
  case 'technical-error': return <TechnicalErrorState />;
}
```

---

## State UI Designs

### No-Code State (QR Scanner Guide)

**When**: User visits `/validate` without `?code=` parameter

```tsx
<Card className="text-center p-8">
  {/* Scanner frame icon */}
  <div className="mx-auto mb-6 w-32 h-32 border-4 border-dashed border-secondary-300 rounded-2xl flex items-center justify-center">
    <CameraIcon className="h-12 w-12 text-secondary-400" />
  </div>

  <h2>Scan the product's QR Code</h2>
  <p>Point your device's camera at the QR Code on the packaging...</p>

  <p className="text-sm text-secondary-500 mt-4">
    If the QR Code does not open automatically, check camera permissions...
  </p>

  <Link href="#qr-location" className="text-primary-600 underline">
    How to find the QR Code on the packaging?
  </Link>
</Card>
```

### Loading State

**When**: Code is being validated

```tsx
<Card className="text-center p-8">
  <div className="mx-auto mb-4">
    <Spinner className="h-8 w-8 animate-spin text-primary-600" />
  </div>
  <h3>Validating your code...</h3>
  <p>We are analyzing the code with our official verifier.</p>
</Card>
```

### Valid State (Success)

**When**: Code passes all validation checks

```tsx
<div className="rounded-xl bg-green-50 border border-green-200 p-8" role="status" aria-live="polite">
  {/* Success icon */}
  <div className="flex items-center gap-4 mb-6">
    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
      <CheckIcon className="h-6 w-6 text-green-600" />
    </div>
    <div>
      <h2 className="text-xl font-semibold text-green-900">Valid and authenticated code</h2>
      <p className="text-green-700">The code meets all expected standards.</p>
    </div>
  </div>

  {/* Code display with copy */}
  <CodeDisplay code={code} />

  {/* Details card */}
  <div className="mt-6 rounded-lg bg-white p-4 space-y-3">
    <div className="flex justify-between">
      <span>Verified code:</span>
      <span className="font-mono">{code}</span>
    </div>
    <div className="flex justify-between">
      <span>Status:</span>
      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm">Authenticated</span>
    </div>
  </div>

  {/* Security note */}
  <p className="mt-6 text-sm text-secondary-600 bg-secondary-50 p-4 rounded-lg">
    If the packaging is tampered with or different from normal, consult a professional...
  </p>

  {/* Actions */}
  <div className="mt-6 flex flex-col sm:flex-row gap-3">
    <Button variant="secondary">Safe use guidelines</Button>
    <Link href="/contact">Contact our customer service</Link>
  </div>
</div>
```

### Invalid State

**When**: Code format is wrong or doesn't match pattern

```tsx
<div className="rounded-xl bg-red-50 border border-red-200 p-8" role="alert">
  <div className="flex items-center gap-4 mb-6">
    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
      <XIcon className="h-6 w-6 text-red-600" />
    </div>
    <div>
      <h2 className="text-xl font-semibold text-red-900">Invalid code</h2>
      <p className="text-red-700">This code does not match the expected pattern.</p>
    </div>
  </div>

  <CodeDisplay code={code} variant="error" />

  {/* Guidelines */}
  <div className="mt-6 bg-white rounded-lg p-4">
    <p className="font-medium text-secondary-900">Please check:</p>
    <ul className="mt-2 space-y-2 text-secondary-700">
      <li>• The QR Code matches the product</li>
      <li>• The packaging has not been tampered with</li>
    </ul>
  </div>

  {/* Actions */}
  <div className="mt-6 flex flex-col sm:flex-row gap-3">
    <Button onClick={() => window.location.href = '/validate'}>
      Scan another product
    </Button>
    <Link href="/contact">Contact our customer service</Link>
  </div>
</div>
```

### Technical Error State

**When**: Unexpected error during validation

```tsx
<div className="rounded-xl bg-secondary-50 border border-secondary-200 p-8">
  <div className="flex items-center gap-4 mb-6">
    <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center">
      <InfoIcon className="h-6 w-6 text-secondary-600" />
    </div>
    <div>
      <h2 className="text-xl font-semibold text-secondary-900">Unable to validate the code now</h2>
      <p className="text-secondary-700">An internal problem occurred. Please try again.</p>
    </div>
  </div>

  <Button onClick={() => window.location.reload()}>
    Try again
  </Button>
</div>
```

---

## Validation Algorithm

### Confirmed Structure

```typescript
// Code format: P12345-4fJxqW91ZB (CONFIRMED)
// - Prefix: Product identifier (maps to product from /src/data/products.ts)
// - Suffix: Security/batch token for checksum validation

import { getProductById } from '@/data/products';

export function validateDrugCode(rawCode: string): ValidationResult {
  // 1. Sanitize input
  const code = sanitize(rawCode);

  // 2. Structural validation (format check)
  if (!isValidFormat(code)) {
    return { status: 'invalid', message: 'Invalid code format' };
  }

  // 3. Checksum validation
  if (!verifyChecksum(code)) {
    return { status: 'invalid', message: 'Code verification failed' };
  }

  // 4. Look up product from existing product list
  const productId = extractProductId(code);
  const product = getProductById(productId);

  if (!product) {
    return { status: 'invalid', message: 'Product not found' };
  }

  // 5. All checks passed - return with product info
  return {
    status: 'valid',
    message: 'Code verified successfully',
    product: {
      id: product.id,
      name: product.name,
      dosageStrengths: product.dosageStrengths,
    }
  };
}

// Uses existing products from /src/data/products.ts:
// - tirzepatide-niacinamide
// - semaglutide-cyanocobalamin
// - nad-injection
// - sermorelin-acetate
```

---

## TypeScript Types

```typescript
// Add to /src/types/index.ts

export type ValidationState = 'no-code' | 'loading' | 'valid' | 'invalid' | 'technical-error';

export interface ValidationProductInfo {
  id: string;
  name: string;
  dosageStrengths: DosageStrength[];  // Reuse existing type
}

export interface ValidationResult {
  status: 'valid' | 'invalid';
  code: string;
  message: string;
  product?: ValidationProductInfo;  // Populated for valid codes
}
```

---

## Accessibility

- **ARIA live regions**: Announce status changes to screen readers
- **Focus management**: Focus result card after validation completes
- **Semantic HTML**: Use proper headings, `role="alert"` for errors
- **Color contrast**: All text meets WCAG AA standards
- **Keyboard navigation**: All interactive elements accessible via keyboard

```tsx
// Screen reader announcements
<div role="status" aria-live="polite" className="sr-only">
  {validationState === 'loading' && 'Validating your medication code. Please wait.'}
  {validationState === 'valid' && 'Medication verified as authentic.'}
  {validationState === 'invalid' && 'Invalid code. Please check and try again.'}
  {validationState === 'technical-error' && 'Error occurred. Please try again.'}
</div>
```

---

## Copy to Clipboard Feature

```tsx
const handleCopy = async () => {
  await navigator.clipboard.writeText(code);
  setCopiedFeedback(true);
  setTimeout(() => setCopiedFeedback(false), 2000);
};

<button onClick={handleCopy} aria-label="Copy code to clipboard">
  {copiedFeedback ? (
    <>
      <CheckIcon /> Code copied
    </>
  ) : (
    <CopyIcon />
  )}
</button>
```

---

## Bottom Section: QR Code Location Guide

```tsx
<section id="qr-location" className="bg-secondary-50 px-6 py-16">
  <div className="mx-auto max-w-[640px]">
    <h2>Where can I find the QR Code for my medication?</h2>
    <p>The QR Code is typically located on the back or side of the medication packaging...</p>
    {/* Illustration/icon showing packaging with QR code */}
  </div>
</section>
```

---

## Implementation Sequence

1. **Phase 1: Types & Validation Logic**
   - Add types to `/src/types/index.ts`
   - Create `/src/lib/drugValidation.ts`

2. **Phase 2: UI Components**
   - Create `/src/components/validation/CodeDisplay.tsx`
   - Create `/src/components/validation/QRScannerGuide.tsx`
   - Create `/src/components/validation/ValidationStates.tsx`

3. **Phase 3: Main Component**
   - Create `/src/components/validation/DrugCodeValidator.tsx`

4. **Phase 4: Page**
   - Create `/src/app/validate/page.tsx`

5. **Phase 5: Polish**
   - Add accessibility features
   - Test responsive design
   - Test all states

---

## All Questions Resolved

- ✅ **Validation Algorithm**: Invalid format → invalid, All checks pass → valid (NO suspicious state)
- ✅ **Code Format**: `P12345-4fJxqW91ZB` confirmed
- ✅ **Product Mapping**: Use existing products from `/src/data/products.ts`
- ✅ **Product Details**: Display product name and dosage strengths (same as product page)
- ✅ **Report Action**: Leads to contact page
