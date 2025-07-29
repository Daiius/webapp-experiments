import clsx from 'clsx'

export const StickableSearchBar = () => (
  <div className={clsx(
    'w-full sticky top-16 h-16 z-40 bg-white',
    'flex flex-row items-center justify-center',
    'p-2',
  )}>
    <input 
      className={clsx(
        'h-12 p-2',
        'border-t border-b border-l border-slate-300', 
        'rounded-l-md',
        'grow',
      )}
      placeholder='用語検索'
    />
    <button
      className={clsx(
        'border border-slate-300',
        'rounded-r-md',
        'h-12 px-4',
        'cursor-pointer',
        'bg-slate-200 hover:bg-slate-300',
      )}
    >
      検索
    </button>
  </div>
)

