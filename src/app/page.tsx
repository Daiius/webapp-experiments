import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Link } from '@/components/common/Link'

type TopLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
}

const TopLink = ({
  children,
  className,
  href,
}: TopLinkProps) => (
  <Link 
    href={href} 
    className={clsx(
      'flex items-center justify-center',
      'bg-slate-200',
      'rounded-md w-[30%] max-h-32',
      className,
    )}
  >
    {children}
  </Link>
)

export default function Home() {
  return (
    <div
      className={clsx(
        'grow flex flex-wrap justify-evenly',
        'p-10',
      )}
    >
      <TopLink href='/blogs'>
        Blogs
      </TopLink>
      <TopLink href='/terms'>
        Terms
      </TopLink>
      <TopLink href='mobile-order'>
        Mobile-Order
      </TopLink>
    </div>
  );
}

