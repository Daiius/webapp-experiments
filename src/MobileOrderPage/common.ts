
import type {
  Dispatch,
  SetStateAction,
} from 'react'

export type OrderStates = 
  | 'start' 
  | 'customerCount' 
  | 'input' 
  | 'orderCount'
  | 'cart'
  | 'completed'
  | 'checking'


export type SetOrderState = Dispatch<SetStateAction<OrderStates>>

export type PageProps = {
  setOrderState: SetOrderState;
}

