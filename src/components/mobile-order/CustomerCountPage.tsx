import clsx from 'clsx'

import type { SetOrderState } from '@/data/mobile-order'

import { LargeButton } from '@/components/mobile-order/LargeButton'

const buttonDataList = [
  '1 人', '2 人', '3 人', '4 人', '5 人', '6 人', '7 人', '8 人', '9人以上'
]

export const CustomerCountPage = ({
  setOrderState,
}: {
  setOrderState: SetOrderState,
}) => (
  <div className={clsx(
    'w-full h-full p-4',
    'grid grid-cols-3 grid-rows-3 gap-4',
    'py-12',
    'text-green-600 text-4xl',
  )}>
    {buttonDataList.map(buttonData =>
      <LargeButton
        key={buttonData}
        onClick={() => setOrderState('input')}
      >
        {buttonData}
      </LargeButton>
    )}
  </div>
)

