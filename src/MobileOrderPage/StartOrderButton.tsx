import clsx from 'clsx'

export const StartOrderButton = ({
  onClick,
  className,
}:{
  onClick: () => void;
  className?: string;
}) => (
  <button
    className={clsx(
      'bg-gradient-to-b from-red-400 via-10% to-red-700 rounded-xl',
      'border-2 border-red-600',
      'text-white text-semibold text-3xl',
      'px-4 py-3',
      'cursor-pointer',
      className
    )}
    onClick={onClick}
  >
    注文をはじめる
  </button>
)
