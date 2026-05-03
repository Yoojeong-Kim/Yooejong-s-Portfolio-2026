import Link from 'next/link';

import { Center, MagneticButton } from '@/components';

/** @param {import('react').PropsWithChildren<{onClick?: () => void, href?: string}>} */
export function ThumbnailAction({ children, onClick, href = '/work' }) {
  if (onClick) {
    return (
      <Center>
        <button onClick={onClick}>
          <MagneticButton
            variant='outline'
            className='px-10 py-8 text-base before:-top-1/2 hover:text-background'
          >
            {children}
          </MagneticButton>
        </button>
      </Center>
    );
  }

  return (
    <Center>
      <Link href={href} passHref>
        <MagneticButton
          variant='outline'
          className='px-10 py-8 text-base before:-top-1/2 hover:text-background'
        >
          {children}
        </MagneticButton>
      </Link>
    </Center>
  );
}
