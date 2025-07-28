import clsx from 'clsx'

import type { OrderStates } from './common'

export const Footer = ({
  orderState,
  className,
}: {
  orderState: OrderStates;
  className?: string;
}) => (
  <footer
    className={clsx(
      'text-white bg-green-600',
      'w-full flex items-center justify-center',
      'py-1',
      className,
    )}
  >
    {orderState === 'start'
      ?  'this is a test mobile order page!'
      : <Navbar orderState={orderState}/>
    }
  </footer>
)

const navbarItems = [
  '注文追加',
  '注文かご',
  '注文履歴',
  '店員呼出',
  '会計する',
] as const

type NavbarItems = typeof navbarItems[number]

const navbarItemDataList: {
  [itemName in NavbarItems]: {
    activeStates: OrderStates[],
    focusedStates: OrderStates[],
  }
} = {
  '注文追加': {
    activeStates: ['input'],
    focusedStates: ['input'],
  }, 
  '注文かご': {
    activeStates: ['input'],
    focusedStates: [],
  }, 
  '注文履歴': {
    activeStates: ['input'],
    focusedStates: [],
  }, 
  '店員呼出': {
    activeStates: ['input'],
    focusedStates: [],
  }, 
  '会計する': {
    activeStates: [],
    focusedStates: [],
  },
}

const Navbar = ({
  orderState
}: {
  orderState: OrderStates;
}) => (
  <div className={clsx(
    'flex flex-row justify-evenly gap-2 p-1'
  )}>
    {Object.entries(navbarItemDataList).map(([itemName, itemData]) =>
      <button
        key={itemName}
        className={clsx(
          'bg-radial from-slate-100 via-50% via-slate-100 to-slate-400',
          'rounded-lg',
          itemData.activeStates.includes(orderState)
            ? 'text-green-600 cursor-pointer'
            : 'text-slate-500',
          itemData.focusedStates.includes(orderState)
            && 'outline-2 outline-orange-400',
          'text-xl font-bold',
          'aspect-square',
        )}
        disabled={!itemData.activeStates.includes(orderState)}
      >
        {itemName}
      </button>
   )}
  </div>
)

