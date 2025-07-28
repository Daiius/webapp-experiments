import type { PageProps } from './common'

import { LanguageButton } from './LanguageButton'
import { Logo } from './Logo'
import { StartOrderButton } from './StartOrderButton'

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

