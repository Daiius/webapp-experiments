import clsx from 'clsx'

import { GlobeIcon } from  '../icons/GlobeIcon'

export const LanguageButton = ({
  className,
}: {
  className?: string;
}) => (
  <button className={clsx(
    'flex flex-col items-center text-green-500',
    'p-1',
    'cursor-pointer',
    className,
  )}>
    <GlobeIcon className='size-8' />
    Language
  </button>
)

