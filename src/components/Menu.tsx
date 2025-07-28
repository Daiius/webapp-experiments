import clsx from 'clsx'

const menuItems = [
  'デモ', '目的', 'テスト',
]

export const Menu = () => (
  <>
    <div className='hidden ml-auto sm:flex flex-row p-4'>
      {menuItems.map(menuItem =>
        <div 
          key={menuItem}
          className='p-3 font-bold'
        >
          {menuItem}
        </div>
      )}
    </div>
    <div className='sm:hidden ml-auto p-4 relative group'>
      <button tabIndex={0} role='button' className='peer'>
        メニュー▽
      </button>
      <div className={clsx(
        'absolute',
        'top-[100%] hidden peer-focus:block z-20',
        'bg-white border border-slate-300',
      )}>
        {menuItems.map(menuItem =>
          <div 
            key={menuItem}
            className='hover:bg-slate-100'
          >
            {menuItem}
          </div>
        )}
      </div>
    </div>
  </>
)

