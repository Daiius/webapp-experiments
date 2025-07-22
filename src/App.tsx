import clsx from 'clsx'
import { useState } from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

import { TermsPage } from './TermsPage'
import { BlogsPage } from './BlogsPage'
import { MobileOrderPage } from './MobileOrderPage'

const tabs = {
  'ブログ': <BlogsPage />,
  '用語集': <TermsPage />,
  'モバイルオーダー':
      <div className={clsx(
        'w-80 h-120',
        'm-auto',
        'border border-slate-400',
      )}>
        <MobileOrderPage />
      </div>,
}

function App() {
  const [selectedTab, setSelectedTab] = useState<keyof typeof tabs>('ブログ')
  return (
    <div className={clsx(
      'scheme-light',
      'bg-slate-100',
      'w-full flex flex-col',
      'min-h-[100vh]'
    )}>
      <Header />
      <div className='flex flex-row'>
        {Object.keys(tabs).map(tab =>
          <button
            key={tab}
            className={clsx(
              'basis-0 grow',
              'p-2 border-b border-r border-t last:border-r border-slate-300',
              'text-center',
              tab === selectedTab && 'bg-slate-300 font-bold',
              'hover:bg-slate-200',
            )}
            onClick={() => setSelectedTab(tab as keyof typeof tabs)}
          >
            {tab}
          </button>
        )}
      </div>
      <main className='grow'>
        {tabs[selectedTab]}
      </main>
      <Footer />
    </div>
  )
}

export default App

