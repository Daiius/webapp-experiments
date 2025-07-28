import clsx from 'clsx'

export const Footer = () => (
  <footer className={clsx(
    'bg-slate-200',
  )}>
    <div className='p-2'>
      フッター
    </div>
    <div className='text-sm text-slate-500 p-2'>
      小さい文字での細かな情報
    </div>
  </footer>
)

