import clsx from 'clsx'
import { Link } from '@/components/common/Link'

import { LinkIcon } from '@/components/icons/LinkIcon'

type ViewAllLinkProps = {
  href: string,
  className?: string,
}

export const ViewAllLink = ({
  href,
  className,
}: ViewAllLinkProps) => (
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

