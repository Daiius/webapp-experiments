import clsx from 'clsx'

import { Link } from '@/components/common/Link'
import Image from 'next/image'

import { BlogArticleData } from '@/data/blogs'
type BlogArticleLinkProps = Omit<BlogArticleData, 'id'>;

export const BlogArticleLink = ({ title }: BlogArticleLinkProps) => (
  <Link 
    className='w-[30%] min-w-60 lg:w-90 mb-2 group'
    href='/blogs'
  >
    <span className='overflow-hidden w-[initial] h-[initial] flex flex-col items-center'>
      <Image 
        src='/thumbnail.png' 
        alt='blog preview'
        width={190}
        height={60}
        className={clsx(
          'w-full', 
          'transition-transform group-hover:scale-110 group-hover:duration-200',
          'origin-center m-auto',
        )}
      />
    </span>
    <p>{title}</p>
  </Link>
)

