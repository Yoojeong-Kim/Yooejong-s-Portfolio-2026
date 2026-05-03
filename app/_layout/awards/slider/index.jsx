'use client';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {Object} props.award
 * @param {string} props.award.title
 * @param {string} props.award.year
 */
export function AwardSlider({ award }) {
  return (
    <div
      className='flex items-center justify-center relative w-1/4 rounded bg-secondary p-6'
      style={{
        minWidth: '300px',
        height: '200px',
      }}
    >
      <div className='text-center'>
        <h4 className='text-lg font-semibold mb-2'>{award.title}</h4>
        <p className='text-sm text-muted-foreground'>{award.year}</p>
      </div>
    </div>
  );
}