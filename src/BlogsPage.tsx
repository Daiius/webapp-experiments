import clsx from 'clsx'
import type { ReactNode } from 'react'

import { LinkIcon } from './icons/LinkIcon'

type BlogArticleData = {
  id: number;
  title: string;
  //imageUlr: string;
}

const blogs: {[blogName: string]: BlogArticleData[]} = {
  '会社ブログ': [
    { id: 0, title: '会社ブログ記事1', },
    { id: 1, title: '会社ブログ記事2', },
    { id: 2, title: '会社ブログ記事3', },
  ],
  'エンジニアブログ': [
    { id: 0, title: 'エンジニアブログ記事1', },
    { id: 1, title: 'エンジニアブログ記事2', },
    { id: 2, title: 'エンジニアブログ記事3', },
  ],
  'デザイナーブログ': [
    { id: 0, title: 'デザイナーブログ記事1', },
    { id: 1, title: 'デザイナーブログ記事2', },
    { id: 2, title: 'デザイナーブログ記事3', },
  ],
}

/**
 * ホバー時に半透明になる<a>タグ
 *
 * NOTE: Next.jsのLinkと名前が重複するので移行時に注意
 */
const Link = ({
  children,
  href,
  className,
}: {
  children: ReactNode,
  href?: string;
  className?: string;
}) => (
  <a 
    className={clsx(
      'transition-opacity hover:opacity-50 hover:duration-200',
      className,
    )} 
    href={href}
  >
    {children}
  </a>
)

const BlogArticleLink = (data: BlogArticleData) => (
  <Link 
    className='w-[30%] min-w-60 lg:w-90 mb-2 group'
    href=''
  >
    <span className='overflow-hidden w-[initial] h-[initial] flex flex-col items-center'>
      <img 
        src='thumbnail.png' 
        className={clsx(
          'w-full', 
          'transition-transform group-hover:scale-110 group-hover:duration-200',
          'origin-center m-auto',
        )}
      />
    </span>
    <p>{data.title}</p>
  </Link>
)

const ViewAllLink = ({
  href,
  className,
}: {
  href: string,
  className?: string,
}) => (
  <Link 
    className={clsx(
      'ml-auto flex flex-row gap-2 items-center-safe',
      'text-nowrap',
      className,
    )} 
    href={href}
  >
    View all
    <LinkIcon className='size-6'/>
  </Link>
)

export const BlogsPage = () => (
  <section id='BLOG' className='p-4'>
    <h1 className={clsx(
      'text-3xl font-semibold',
      'text-left sm:text-center',
    )} >
      BLOG
    </h1>
    {Object.entries(blogs).map(([blogName, articles]) =>
      <div key={blogName} className='mb-2'>
        <div className='py-2 flex flex-row'>
          <h2 className='text-lg font-semibold'>
            {blogName}
          </h2>
          <ViewAllLink href='' />
        </div>
        <div className={clsx(
          'flex flex-row gap-4 justify-evenly',
          ' overflow-x-auto [scrollbar-width:none]',
        )}>
          {articles.map(article =>
            <BlogArticleLink {...article} />
          )}
        </div>
      </div>
    )}
  </section>
)

