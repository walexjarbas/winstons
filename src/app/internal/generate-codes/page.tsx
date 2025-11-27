'use client';

import { useState } from 'react';
import { generateCode, generateCodeBatch, getValidProductCodes, getProductNameFromCode } from '@/lib/drugValidation';

export default function GenerateCodesPage() {
  const [productCode, setProductCode] = useState('TZ001');
  const [startSerial, setStartSerial] = useState(1);
  const [count, setCount] = useState(10);
  const [generatedCodes, setGeneratedCodes] = useState<Array<{ serial: number; code: string }>>([]);
  const [singleCode, setSingleCode] = useState('');

  const productCodes = getValidProductCodes();

  const handleGenerateBatch = () => {
    try {
      const codes = generateCodeBatch(productCode, startSerial, count);
      setGeneratedCodes(codes);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error generating codes');
    }
  };

  const handleGenerateSingle = () => {
    try {
      const code = generateCode(productCode, startSerial);
      setSingleCode(code);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error generating code');
    }
  };

  const handleCopyAll = () => {
    const text = generatedCodes.map(c => `${c.serial}\t${c.code}`).join('\n');
    navigator.clipboard.writeText(text);
  };

  const handleExportCSV = () => {
    const productName = getProductNameFromCode(productCode) || productCode;
    const header = 'Serial,Code,Product\n';
    const rows = generatedCodes.map(c => `${c.serial},${c.code},"${productName}"`).join('\n');
    const csv = header + rows;

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `codes-${productCode}-${startSerial}-${startSerial + count - 1}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900">Internal Code Generator</h1>
          <p className="mt-2 text-secondary-600">
            Generate valid product codes for QR code printing. This page is for internal use only.
          </p>
        </div>

        {/* Generator Form */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-secondary-900">Generate Codes</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Product Code */}
            <div>
              <label className="mb-1 block text-sm font-medium text-secondary-700">
                Product Code
              </label>
              <select
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                {productCodes.map((code) => (
                  <option key={code} value={code}>
                    {code} - {getProductNameFromCode(code)}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Serial */}
            <div>
              <label className="mb-1 block text-sm font-medium text-secondary-700">
                Start Serial
              </label>
              <input
                type="number"
                min={1}
                max={99999}
                value={startSerial}
                onChange={(e) => setStartSerial(parseInt(e.target.value) || 1)}
                className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>

            {/* Count */}
            <div>
              <label className="mb-1 block text-sm font-medium text-secondary-700">
                Count
              </label>
              <input
                type="number"
                min={1}
                max={1000}
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleGenerateSingle}
              className="rounded-lg bg-secondary-100 px-4 py-2 font-medium text-secondary-700 hover:bg-secondary-200"
            >
              Generate Single Code
            </button>
            <button
              onClick={handleGenerateBatch}
              className="rounded-lg bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-700"
            >
              Generate Batch ({count} codes)
            </button>
          </div>

          {/* Single Code Result */}
          {singleCode && (
            <div className="mt-4 rounded-lg bg-green-50 p-4">
              <p className="text-sm font-medium text-green-800">Generated Code:</p>
              <code className="mt-1 block font-mono text-lg text-green-900">{singleCode}</code>
              <p className="mt-2 text-sm text-green-700">
                Test URL:{' '}
                <a
                  href={`/validate?code=${singleCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-800"
                >
                  /validate?code={singleCode}
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Generated Codes List */}
        {generatedCodes.length > 0 && (
          <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-secondary-900">
                Generated Codes ({generatedCodes.length})
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyAll}
                  className="rounded-lg bg-secondary-100 px-3 py-1.5 text-sm font-medium text-secondary-700 hover:bg-secondary-200"
                >
                  Copy All
                </button>
                <button
                  onClick={handleExportCSV}
                  className="rounded-lg bg-secondary-100 px-3 py-1.5 text-sm font-medium text-secondary-700 hover:bg-secondary-200"
                >
                  Export CSV
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-auto rounded-lg border border-secondary-200">
              <table className="w-full">
                <thead className="sticky top-0 bg-secondary-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-secondary-600">
                      Serial
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-secondary-600">
                      Code
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-secondary-600">
                      Test Link
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-100">
                  {generatedCodes.map(({ serial, code }) => (
                    <tr key={serial} className="hover:bg-secondary-50">
                      <td className="px-4 py-2 text-sm text-secondary-600">
                        #{serial.toString().padStart(5, '0')}
                      </td>
                      <td className="px-4 py-2">
                        <code className="font-mono text-sm text-secondary-900">{code}</code>
                      </td>
                      <td className="px-4 py-2">
                        <a
                          href={`/validate?code=${code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 hover:underline"
                        >
                          Test
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="mt-6 rounded-xl border border-secondary-200 bg-white p-6">
          <h3 className="font-semibold text-secondary-900">How it works</h3>
          <ul className="mt-3 space-y-2 text-sm text-secondary-600">
            <li>
              <strong>Code Format:</strong> XXNNN-AAAAAAAAAA (e.g., TZ001-ABCD1234EF)
            </li>
            <li>
              <strong>Product Codes:</strong> TZ001, SM001, ND001, SR001
            </li>
            <li>
              <strong>Serial Range:</strong> 00001 to 99999 (up to 99,999 unique codes per product)
            </li>
            <li>
              <strong>Hash:</strong> Each code is cryptographically generated using a secret seed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
