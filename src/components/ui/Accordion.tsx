'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  variant?: 'dark' | 'light' | 'blue';
}

export function Accordion({ items, defaultOpenId, variant = 'dark' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const styles = {
    dark: {
      border: 'border-white/30',
      title: 'text-white',
      content: 'text-white',
      button: 'border-white bg-white',
      icon: 'bg-primary-600',
    },
    light: {
      border: 'border-[#f8f7f5]',
      title: 'text-secondary-700',
      content: 'text-secondary-600',
      button: 'border-primary-600 bg-transparent',
      icon: 'bg-primary-600',
    },
    blue: {
      border: 'border-[#f8f7f5]',
      title: 'text-secondary-700',
      content: 'text-secondary-600',
      button: 'border-[#3b82f6] bg-transparent',
      icon: 'bg-[#3b82f6]',
    },
  };

  const currentStyle = styles[variant];

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            currentStyle.border,
            index === 0 && 'border-t',
            'border-b'
          )}
        >
          <button
            type="button"
            onClick={() => toggleItem(item.id)}
            className="relative flex w-full items-center justify-between py-5 pr-16 text-left"
          >
            <span className={cn('text-base font-bold md:text-lg', currentStyle.title)}>
              {item.title}
            </span>
            <div
              className={cn(
                'absolute right-0 flex h-11 w-11 items-center justify-center rounded-full border-2',
                currentStyle.button
              )}
            >
              <div className="relative h-4 w-4">
                {/* Horizontal line */}
                <div
                  className={cn(
                    'absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2',
                    currentStyle.icon
                  )}
                />
                {/* Vertical line (hidden when open) */}
                <div
                  className={cn(
                    'absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200',
                    currentStyle.icon,
                    openId === item.id && 'scale-y-0'
                  )}
                />
              </div>
            </div>
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openId === item.id ? 'max-h-[500px] pb-5' : 'max-h-0'
            )}
          >
            <p
              className={cn(
                'pr-12 text-base leading-relaxed md:text-lg',
                currentStyle.content
              )}
            >
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
