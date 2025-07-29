'use client'
import { useEffect, useState, } from 'react' 
import clsx from 'clsx'
import { indexes } from '@/data/terms'

import { Link } from '@/components/common/Link'
import { StickableSearchBar } from '@/components/terms/StickableSearchBar'

/**
 * ModalやDrawerなど、後ろのbody等の要素をスクロールさせない様にするよくある処理が
 * 「戻る」ボタンでこのページに遷移した際に毎回トップにスクロールする問題と
 * 何か関係がないか確認するための関数
 *
 * よく使われる処理の一部を取り出して調査
 */
const experimentalScrollFunction = () => {
  const scrollY = parseInt(document.body.style.top || '0')
  window.scrollTo(0, scrollY * -1)
}

export default function TermsPage() {
  const [dummy, _] = useState<boolean>(false)
  //const [mounted, setMounted] = useState<boolean>(false)

  //useEffect(() => setMounted(true), [])

  useEffect(() => {
    //if (mounted) {
      setTimeout(() => {
        experimentalScrollFunction()
      }, 100)
    //}
  }, [dummy])

  return (
    <div className={clsx(
      'flex-auto flex flex-col items-center',
    )}>
      <StickableSearchBar />
      <div className='p-2 flex flex-wrap gap-2'>
        {indexes.map(index => 
          <div 
            key={index}
            className={clsx(
              'border border-slate-300 rounded-md',
              'p-2',
              'text-nowrap',
            )}
          >
            <a href={`#${index}`}>
              {index} 行
            </a>
          </div>
        )}
      </div>
      <div className='w-full'>
        {indexes.map(index =>
          <section key={index} id={index} className='scroll-mt-16'>
            <div className='bg-slate-200 p-1 top-32 sticky'>{index}行</div>
            <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-between'>
              {[...new Array(10)].map((_, i) => 
                <div 
                  key={i}
                  className='p-2 sm:w-[30%] flex flex-row items-center gap-3'
                >
                  <div className='rounded-full size-2 bg-slate-300'></div>
                  
                  <Link
                    href={`/terms/用語${i}-${[...new Array(i+1)].map((_) => index).join('')}`}
                  >
                    <span>用語{i}-{[...new Array(i+1)].map((_) => index).join('')}</span>
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
      Body
    </div>
  )
}

