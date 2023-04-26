import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import classnames from 'classnames'
import { FC } from 'react'

import { ArrowLinkProps } from './def'

const Button: FC<ArrowLinkProps> = ({
  onClick,
  href,
  children,
  fill,
  primary,
  noPadding,
  showArrow,
}) => {
  const fillClassName = classnames(
    'text-secondary',
    primary ? 'bg-primary' : 'bg-text'
  )
  const noFillClassName = primary ? 'text-primary' : 'text-text'
  const className = classnames(
    'flex items-center justify-center rounded-md font-semibold pointer-events-auto',
    noPadding ? '' : 'px-4 py-3',
    fill ? fillClassName : noFillClassName
  )
  const ArrowButton = showArrow && <ArrowSmallRightIcon className="h-6 w-6" />

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        {ArrowButton}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
      {ArrowButton}
    </button>
  )
}
export default Button
