import clsx from 'clsx'

import type { ReactNode } from 'react'
import NextLink from 'next/link'

type LinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
}

/**
 * ホバー時に半透明になる<a>タグ
 *
 * NOTE: Next.jsのLinkと名前が重複するので移行時に注意
 */
export const Link = ({
  children,
  href,
  className,
}: LinkProps) => (
  <NextLink 
    className={clsx(
      'transition-opacity hover:opacity-50 hover:duration-200',
      className,
    )} 
    href={href}
  >
    {children}
  </NextLink>
)

