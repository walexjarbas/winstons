'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CodeDisplay } from './CodeDisplay';
import { validateDrugCode } from '@/lib/drugValidation';
import type { ValidationState, ValidationResult } from '@/types';

export function DrugCodeValidator() {
  const [validationState, setValidationState] = useState<ValidationState>('no-code');
  const [result, setResult] = useState<ValidationResult | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      setValidationState('loading');
      // Brief delay for UX
      const timer = setTimeout(() => {
        try {
          const validationResult = validateDrugCode(code);
          setResult(validationResult);
          setValidationState(validationResult.status);
        } catch {
          setValidationState('technical-error');
        }
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setValidationState('no-code');
      setResult(null);
    }
  }, [code]);

  // Focus result on state change for accessibility
  useEffect(() => {
    if (validationState !== 'no-code' && validationState !== 'loading') {
      resultRef.current?.focus();
    }
  }, [validationState]);

  // Screen reader announcements
  const getAnnouncement = () => {
    switch (validationState) {
      case 'loading':
        return 'Validating your medication code. Please wait.';
      case 'valid':
        return 'Medication verified as authentic.';
      case 'invalid':
        return 'Invalid code. Please check and try again.';
      case 'technical-error':
        return 'Error occurred. Please try again.';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Screen reader announcements */}
      <div role="status" aria-live="polite" className="sr-only">
        {getAnnouncement()}
      </div>

      {validationState === 'no-code' && <NoCodeState />}
      {validationState === 'loading' && <LoadingState />}
      {validationState === 'valid' && result && (
        <ValidState result={result} ref={resultRef} />
      )}
      {validationState === 'invalid' && (
        <InvalidState code={code || ''} message={result?.message} ref={resultRef} />
      )}
      {validationState === 'technical-error' && <TechnicalErrorState ref={resultRef} />}
    </>
  );
}

// No Code State - QR Scanner Guide (Horizontal Layout)
function NoCodeState() {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Scanner frame visual */}
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl border-4 border-dashed border-secondary-300 sm:h-28 sm:w-28">
          <svg
            className="h-10 w-10 text-secondary-400 sm:h-12 sm:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-secondary-900">
            Scan the product&apos;s QR Code
          </h2>
          <p className="mt-2 text-secondary-600">
            Point your device&apos;s camera at the QR Code on the packaging. It will automatically
            open this page with the serial code.
          </p>

          <p className="mt-4 text-sm text-secondary-500">
            If the QR Code does not open automatically, check that the camera has permission and
            that the QR Code is not damaged.
          </p>

          <Link
            href="#qr-location"
            className="mt-3 inline-block text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
          >
            How to find the QR Code on the packaging?
          </Link>
        </div>
      </div>
    </Card>
  );
}

// Loading State (Horizontal Layout)
function LoadingState() {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Spinner */}
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-50 sm:h-28 sm:w-28">
          <svg
            className="h-10 w-10 animate-spin text-primary-600 sm:h-12 sm:w-12"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-semibold text-secondary-900">Validating your code...</h3>
          <p className="mt-2 text-secondary-600">
            We are analyzing the code you entered with our official verifier.
          </p>
        </div>
      </div>
    </Card>
  );
}

// Valid State - Success
import { forwardRef } from 'react';

interface ValidStateProps {
  result: ValidationResult;
}

const ValidState = forwardRef<HTMLDivElement, ValidStateProps>(({ result }, ref) => {
  return (
    <Card
      ref={ref}
      tabIndex={-1}
      role="status"
      aria-live="polite"
      className="border-green-200 bg-green-50 p-6 outline-none sm:p-8"
    >
      {/* Header - Horizontal Layout */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Success Icon */}
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 sm:h-28 sm:w-28">
          <svg
            className="h-10 w-10 text-green-600 sm:h-12 sm:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-green-900">Valid and authenticated code</h2>
          <p className="mt-2 text-green-700">
            The code entered meets all expected standards and has been successfully authenticated.
          </p>

          {/* Product details inline */}
          {result.product && (
            <div className="mt-4 space-y-1 text-sm">
              <p className="text-green-800">
                <span className="text-green-600">Product:</span>{' '}
                <span className="font-medium">{result.product.name}</span>
              </p>
              {result.product.dosageStrengths.length > 0 && (
                <p className="text-green-800">
                  <span className="text-green-600">Dosage:</span>{' '}
                  <span className="font-medium">{result.product.dosageStrengths[0].value}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Code display */}
      <div className="mt-6">
        <CodeDisplay code={result.code} label="Verified code" variant="success" />
      </div>

      {/* Security note */}
      <p className="mt-6 rounded-lg bg-white/60 p-4 text-sm text-green-700">
        If the packaging is tampered with or different from normal, consult a professional even if
        the code is valid.
      </p>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button variant="secondary" asChild>
          <Link href="/contact">Safe use guidelines</Link>
        </Button>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
        >
          Contact our customer service
        </Link>
      </div>
    </Card>
  );
});

ValidState.displayName = 'ValidState';

// Invalid State
interface InvalidStateProps {
  code: string;
  message?: string;
}

const InvalidState = forwardRef<HTMLDivElement, InvalidStateProps>(({ code, message }, ref) => {
  return (
    <Card
      ref={ref}
      tabIndex={-1}
      role="alert"
      className="border-red-200 bg-red-50 p-6 outline-none sm:p-8"
    >
      {/* Header - Horizontal Layout */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Error Icon */}
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100 sm:h-28 sm:w-28">
          <svg
            className="h-10 w-10 text-red-600 sm:h-12 sm:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-red-900">Invalid code</h2>
          <p className="mt-2 text-red-700">
            {message || 'This code does not match the expected pattern.'}
          </p>

          {/* Guidelines inline */}
          <div className="mt-4 text-sm">
            <p className="font-medium text-red-800">Please check:</p>
            <ul className="mt-2 space-y-1 text-red-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                The QR Code matches the product
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                The packaging has not been tampered with
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Code display */}
      {code && (
        <div className="mt-6">
          <CodeDisplay code={code} label="Analyzed code" variant="error" />
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/validate">Scan another product</Link>
        </Button>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
        >
          Contact our customer service
        </Link>
      </div>
    </Card>
  );
});

InvalidState.displayName = 'InvalidState';

// Technical Error State
const TechnicalErrorState = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Card
      ref={ref}
      tabIndex={-1}
      className="p-6 outline-none sm:p-8"
    >
      {/* Header - Horizontal Layout */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Warning Icon */}
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary-100 sm:h-28 sm:w-28">
          <svg
            className="h-10 w-10 text-secondary-500 sm:h-12 sm:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-secondary-900">
            Unable to validate the code now
          </h2>
          <p className="mt-2 text-secondary-600">
            An internal problem occurred while processing the code. Please try again.
          </p>

          {/* Action inline */}
          <div className="mt-4">
            <Button onClick={() => window.location.reload()}>Try again</Button>
          </div>
        </div>
      </div>
    </Card>
  );
});

TechnicalErrorState.displayName = 'TechnicalErrorState';
