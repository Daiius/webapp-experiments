import clsx from 'clsx'

const indexes = [...'あかさたなはまやらわ'];

export const TermsPage = () => (
  <div className={clsx(
    'flex-auto flex flex-col items-center',
  )}>
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
          <div className='bg-slate-200 p-1 top-16 sticky'>{index}行</div>
          <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-between'>
            {[...new Array(10)].map((_, i) => 
              <div 
                key={i}
                className='p-2 sm:w-[30%] flex flex-row items-center gap-3'
              >
                <div className='rounded-full size-2 bg-slate-300'></div>
                <span>用語{i}-{[...new Array(i+1)].map((_) => index) }</span>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
    Body
  </div>
)

