'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Button } from '@/components/ui/Button';

const userTypes = [
  { id: 'pharmacy', label: 'Pharmacy' },
  { id: 'doctor', label: 'Doctor/Provider' },
  { id: 'patient', label: 'Patient' },
];

const helpOptions = [
  { value: '', label: 'Select an option' },
  { value: 'quote', label: 'Get a quote', businessOnly: true },
  { value: 'product', label: 'Product question', businessOnly: false },
  { value: 'support', label: 'Order support', businessOnly: false },
  { value: 'other', label: 'Other', businessOnly: false },
];

const volumeOptions = [
  { value: '', label: 'Select estimated volume' },
  { value: 'small', label: 'Small (10-100 units)' },
  { value: 'medium', label: 'Medium (100-500 units)' },
  { value: 'large', label: 'Large (500-1,000 units)' },
  { value: 'enterprise', label: 'Enterprise (1,000+ units)' },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userType, setUserType] = useState('pharmacy');
  const [helpType, setHelpType] = useState('');
  const [phone, setPhone] = useState<string | undefined>();

  const isBusinessUser = userType === 'doctor' || userType === 'pharmacy';
  const isQuoteRequest = helpType === 'quote';

  const filteredHelpOptions = helpOptions.filter(
    (option) => !option.businessOnly || isBusinessUser
  );

  const handleUserTypeChange = (newUserType: string) => {
    setUserType(newUserType);
    // Reset help type if current selection is not available for new user type
    if (newUserType === 'patient' && helpType === 'quote') {
      setHelpType('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-900">Thank you!</h3>
        <p className="mt-2 text-green-700">
          Your message has been sent. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* User Type Radio Group */}
      <div>
        <label className="mb-4 block text-base font-medium text-secondary-900">
          I am a:
        </label>
        <div className="flex flex-wrap gap-3">
          {userTypes.map((type) => (
            <label
              key={type.id}
              className={`cursor-pointer rounded-lg border-2 px-6 py-3 text-base font-medium transition-colors ${
                userType === type.id
                  ? 'border-primary-600 bg-primary-600 text-white'
                  : 'border-secondary-300 bg-white text-secondary-700 hover:border-primary-400'
              }`}
            >
              <input
                type="radio"
                name="userType"
                value={type.id}
                checked={userType === type.id}
                onChange={(e) => handleUserTypeChange(e.target.value)}
                className="sr-only"
              />
              {type.label}
            </label>
          ))}
        </div>
      </div>

      {/* Help Dropdown */}
      <div>
        <label
          htmlFor="helpType"
          className="mb-2 block text-base font-medium text-secondary-900"
        >
          How can we help you?<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="helpType"
            name="helpType"
            required
            value={helpType}
            onChange={(e) => setHelpType(e.target.value)}
            className="h-12 w-full appearance-none rounded-lg border border-secondary-300 bg-white px-4 pr-10 text-base text-secondary-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            {filteredHelpOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-secondary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Business Fields - Only show for Doctor/Provider or Pharmacy */}
      {isBusinessUser && (
        <div>
          <label
            htmlFor="companyName"
            className="mb-2 block text-base font-medium text-secondary-900"
          >
            {userType === 'pharmacy' ? 'Pharmacy Name' : 'Practice/Organization Name'}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder={userType === 'pharmacy' ? 'Enter pharmacy name' : 'Enter practice or organization name'}
            required
            className="h-12 w-full rounded-lg border border-secondary-300 bg-white px-4 text-base text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      )}

      {/* Quote-specific fields */}
      {isQuoteRequest && (
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="productInterest"
              className="mb-2 block text-base font-medium text-secondary-900"
            >
              Products of Interest
            </label>
            <input
              type="text"
              id="productInterest"
              name="productInterest"
              placeholder="e.g., Generic medications, specialty drugs..."
              className="h-12 w-full rounded-lg border border-secondary-300 bg-white px-4 text-base text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>
          <div>
            <label
              htmlFor="estimatedVolume"
              className="mb-2 block text-base font-medium text-secondary-900"
            >
              Estimated Volume
            </label>
            <div className="relative">
              <select
                id="estimatedVolume"
                name="estimatedVolume"
                className="h-12 w-full appearance-none rounded-lg border border-secondary-300 bg-white px-4 pr-10 text-base text-secondary-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                {volumeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-secondary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-base font-medium text-secondary-900"
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
            className="h-12 w-full rounded-lg border border-secondary-300 bg-white px-4 text-base text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-base font-medium text-secondary-900"
          >
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
            className="h-12 w-full rounded-lg border border-secondary-300 bg-white px-4 text-base text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-base font-medium text-secondary-900"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
            className="h-12 w-full rounded-lg border border-secondary-300 bg-white px-4 text-base text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-base font-medium text-secondary-900"
          >
            Phone<span className="text-red-500">*</span>
          </label>
          <PhoneInput
            international
            defaultCountry="US"
            value={phone}
            onChange={setPhone}
            className="phone-input h-12 w-full rounded-lg border border-secondary-300 bg-white px-4 text-base text-secondary-900 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20"
          />
          <input type="hidden" name="phone" value={phone || ''} required />
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-base font-medium text-secondary-900"
        >
          {isQuoteRequest ? 'Additional comments' : 'Tell us about your needs'}
          {!isQuoteRequest && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id="description"
          name="description"
          placeholder={
            isQuoteRequest
              ? 'Any special requirements or questions...'
              : 'Tell us more about your inquiry...'
          }
          rows={4}
          required={!isQuoteRequest}
          maxLength={1000}
          className="min-h-[120px] w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-base text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        />
        <p className="mt-1 text-right text-sm text-secondary-400">Max 1000 characters</p>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col items-end gap-3">
        <Button type="submit" disabled={isSubmitting} className="px-10">
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
        <p className="text-sm text-secondary-500">
          We typically respond within 1 business day
        </p>
      </div>
    </form>
  );
}
