import clsx from 'clsx'

import { Menu } from './Menu'

export const Header = () => (
  <header
    className={clsx(
      'h-16 w-full z-10', 
      'bg-slate-200',
      'flex flex-row items-center',
      'top-0 sticky',
    )}
  >
    <div className='p-4 font-bold'>
      練習ページ
    </div>
    <Menu />
  </header>
)

