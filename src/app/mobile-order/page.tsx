'use client'

import clsx from 'clsx'

import { useState } from 'react'
import type {
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'


import { Header } from '@/components/mobile-order/Header'
import { Footer } from '@/components/mobile-order/Footer'

import type { OrderStates } from '@/data/mobile-order'

import { StartPage } from '@/components/mobile-order/StartPage'
import { CustomerCountPage } from '@/components/mobile-order/CustomerCountPage'
import { InputPage } from '@/components/mobile-order/InputPage'

const orderData: {
  [orderState in OrderStates]: { 
    header: string;
    render?: 
      (props: {
        setOrderState: Dispatch<SetStateAction<OrderStates>> 
      })=> ReactNode,
  }
} = {
  start: { 
    header: 'いらっしゃいませ',
    render: (props) => <StartPage {...props} />,
  },
  customerCount: { 
    header: '何名様（全員）でご利用ですか？',
    render: (props) => <CustomerCountPage {...props} />,
  },
  input: { 
    header: 'メニューブックから番号を入力してください',
    render: (props) => <InputPage {...props} />,
  },
  orderCount: {
    header: '数量を選択して下さい',
  },
  cart: {
    header: '他に注文があれば「追加」、なければ「注文」',
  },
  completed: {
    header: 'ご注文ありがとうございます',
  },
  checking: {
    header: 'お会計が確定しました'
  }
}

export default function MobileOrderPage() {
  const [orderState, setOrderState] = useState<OrderStates>('start')
  const data = orderData[orderState]
  return (
    <div className='flex items-center justify-center'>
      <div className={clsx(
        'flex flex-col items-center',
        'w-80 h-120',
        'border border-slate-300',
      )}>
        <Header message={data.header} />
        <main className='grow flex flex-col w-full items-center overflow-y-auto'>
          {data.render?.({ setOrderState })}
        </main>
        <Footer orderState={orderState}/>
      </div>
    </div>

  )
} 

