import clsx from 'clsx'

export const Header = ({
  message
}: {
  message: string
}) => (
  <header className='h-10 bg-green-600 w-full flex items-center justify-center'>
    <span className='text-white font-semibold text-nowrap animate-blink'>
      {message}
    </span>
  </header>
)
