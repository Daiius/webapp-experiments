import clsx from 'clsx'

import type { 
  ReactNode,
  MouseEventHandler,
} from 'react'

export const LargeButton = ({
  onClick,
  children,
  className,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>, 
  children: ReactNode,
  className?: string,
}) => (
  <button
    className={clsx(
      'rounded-lg',
      'border-[1.5px] border-slate-500',
      'bg-gradient-to-b from-slate-100 via-slate-100 to-slate-300',
      'cursor-pointer',
      className,
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

