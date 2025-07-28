
import clsx from 'clsx'

import { blogs } from '@/data/blogs'

import { ViewAllLink } from '@/components/blogs/ViewAllLink'
import { BlogArticleLink } from '@/components/blogs/BlogArticleLink'

export default async function BlogsPage()  {
  return (
    <section id='BLOG' className='w-full'>
      <h1 className={clsx(
        'text-3xl font-semibold',
        'text-left sm:text-center',
      )} >
        BLOG
      </h1>
      {Object.entries(blogs).map(([blogName, articles]) =>
        <div key={blogName} className='mb-2'>
          <div className='p-2 flex flex-row'>
            <h2 className='text-lg font-semibold'>
              {blogName}
            </h2>
            <ViewAllLink href='/blogs' />
          </div>
          <div className={clsx(
            'flex flex-row gap-4 justify-evenly',
            'overflow-x-auto [scrollbar-width:none]',
          )}>
            {articles.map(article =>
              <BlogArticleLink key={article.id} title={article.title} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

