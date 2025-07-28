import clsx from 'clsx'
import { useState, type ReactNode } from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

import { TermsPage } from './TermsPage'
import { BlogsPage } from './BlogsPage'
import { MobileOrderPage } from './MobileOrderPage'

const tabNames = ['ブログ', '用語集', 'モバイルオーダー'] as const

type TabNames = typeof tabNames[number]

const tabs: {
  [tabNames in TabNames]: {
    pageContent: ReactNode,
    tabContent: ReactNode,
  }
} = {
  'ブログ': {
    pageContent: <BlogsPage />,
    tabContent: 'ブログ',
  },
  '用語集': {
    pageContent: <TermsPage />,
    tabContent: '用語集',
  },
  'モバイルオーダー': {
    pageContent: <MobileOrderPage />,
    tabContent: 
      <div className='flex flex-wrap justify-center'>
        <div>モバイル</div>
        <div>オーダー</div>
      </div>,
  }
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
        {Object.entries(tabs).map(([tabName, tabData]) =>
          <button
            key={tabName}
            className={clsx(
              'basis-0 grow',
              'p-2 border-b border-r border-t last:border-r border-slate-300',
              'text-center',
              tabName === selectedTab && 'bg-slate-300 font-bold',
              'hover:bg-slate-200',
            )}
            onClick={() => setSelectedTab(tabName as keyof typeof tabs)}
          >
            {tabData.tabContent}
          </button>
        )}
      </div>
      <main className='grow flex w-full items-center justify-center'>
        {tabs[selectedTab].pageContent}
      </main>
      <Footer />
    </div>
  )
}

export default App

