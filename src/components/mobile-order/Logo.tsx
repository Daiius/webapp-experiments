import clsx from 'clsx'

export const Logo = ({
  className,
}: {
  className?: string;
}) => (
  <div className={clsx(
    'rounded-full w-64 h-38 bg-green-200',
    'flex items-center justify-center',
    'text-5xl font-bold text-green-500',
    className,
  )}>
    Saizente
  </div>
)

