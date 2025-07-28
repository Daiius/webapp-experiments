
import type { PageProps } from '@/data/mobile-order'

import { LanguageButton } from '@/components/mobile-order/LanguageButton'
import { Logo } from '@/components/mobile-order/Logo'
import { StartOrderButton } from '@/components/mobile-order/StartOrderButton'

export const StartPage = ({
  setOrderState,
}: PageProps) => (
  <>
    <LanguageButton className='ml-auto'/>
    <Logo className='my-4'/>
    <StartOrderButton 
      className='my-4'
      onClick={() => setOrderState('customerCount')}
    />
  </>
)

