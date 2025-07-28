import clsx from 'clsx'

export default async function TermPage({
  params,
}: {
  params: Promise<{ term: string }>
}) {
  const { term } = await params
  return (
    <div className={clsx(
      'flex flex-col items-center justify-center',
      'text-4xl font-bold',
    )}>
      {decodeURIComponent(term)}
    </div>
  )
}
