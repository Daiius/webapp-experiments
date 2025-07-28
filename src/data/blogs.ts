
export type BlogArticleData = {
  id: number;
  title: string;
  //imageUlr: string;
}

const blogNames = ['会社ブログ', 'エンジニアブログ', 'デザイナーブログ'] as const

type BlogNames = typeof blogNames[number]

type Blogs = {
  [blogName in BlogNames]: BlogArticleData[]
}

export const blogs: Blogs = {
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

