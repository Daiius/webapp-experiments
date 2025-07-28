import clsx from 'clsx'

import type { PageProps } from '@/data/mobile-order'

import { Logo } from './Logo'
import { LargeButton } from './LargeButton'

export const InputPage = ({
  //setOrderState,
}: PageProps) => (
  <>
    <div className='w-full h-38 flex flex-col-reverse items-center'>
      <Logo className='!h-24 !w-60'/>
    </div>
    <div
      className={clsx(
        'rounded-sm w-[95%]',
        'h-10 m-2',
        'outline-2 outline-green-600',
      )}
    >
    </div>
    <div className={clsx(
      'grid grid-rows-4 grid-cols-3 gap-1 w-full px-1',
      'text-4xl text-green-600 font-semibold',
    )}>
      <LargeButton>1</LargeButton>
      <LargeButton>2</LargeButton>
      <LargeButton>3</LargeButton>
      <LargeButton>4</LargeButton>
      <LargeButton>5</LargeButton>
      <LargeButton>6</LargeButton>
      <LargeButton>7</LargeButton>
      <LargeButton>8</LargeButton>
      <LargeButton>9</LargeButton>
      <div></div>
      <LargeButton>0</LargeButton>
      <LargeButton
        className={clsx(
          'text-2xl text-white',
          '!bg-gradient-to-b !from-green-400 !via-green-500 !to-green-700',
        )}
      >
        削除
      </LargeButton>
    </div>
  </>
)

