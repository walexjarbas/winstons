'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeDisplayProps {
  code: string;
  label?: string;
  variant?: 'default' | 'success' | 'error';
}

export function CodeDisplay({ code, label = 'Code detected', variant = 'default' }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const variantStyles = {
    default: 'bg-secondary-100 border-secondary-200',
    success: 'bg-green-100 border-green-200',
    error: 'bg-red-100 border-red-200',
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-secondary-600">{label}</p>
      <div
        className={cn(
          'flex items-center justify-between gap-3 rounded-lg border p-4',
          variantStyles[variant]
        )}
      >
        <code className="font-mono text-base tracking-wide text-secondary-900 break-all">
          {code}
        </code>
        <button
          onClick={handleCopy}
          className={cn(
            'flex-shrink-0 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            copied
              ? 'bg-green-600 text-white'
              : 'bg-white text-secondary-700 hover:bg-secondary-50 border border-secondary-300'
          )}
          aria-label={copied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
        >
          {copied ? (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied</span>
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
