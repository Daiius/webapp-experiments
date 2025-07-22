import clsx from 'clsx'

import { 
  useState, 
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from 'react'


import { Header } from './Header'
import { Footer } from './Footer'

import type { OrderStates } from './common'

import { StartPage } from './StartPage'
import { CustomerCountPage } from './CustomerCountPage'
import { InputPage } from './InputPage'

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

export const MobileOrderPage = ({
 className,
}: {
 className?: string,
}) => {
  const [orderState, setOrderState] = useState<OrderStates>('start')
  const data = orderData[orderState]
  return (
    <div className='flex self-center justify-self-center'>
      <div className={clsx(
        'flex flex-col items-center',
        'w-80 h-120',
        'border border-slate-300',
        'self-center justify-self-center',
        className,
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

