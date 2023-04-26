import classnames from 'classnames'
import { FC } from 'react'

import { TypographyProps } from './def'

const Typography: FC<TypographyProps> = ({
  variant,
  className = '',
  children,
}) => {
  if (variant === 'h1') {
    return (
      <h1 className={classnames('text-4xl font-bold lg:text-7xl', className)}>
        {children}
      </h1>
    )
  }
  if (variant === 'h2') {
    return (
      <h2 className={classnames('text-4xl font-semibold lg:text-6xl', className)}>
        {children}
      </h2>
    )
  }
  if (variant === 'h3') {
    return (
      <h3
        className={classnames('text-3xl font-bold lg:text-5xl', className)}
      >
        {children}
      </h3>
    )
  }
  if (variant === 'h4') {
    return (
      <h4
      className={classnames('text-2xl font-semibold lg:text-4xl', className)}
      >
        {children}
      </h4>
    )
  }
  if (variant === 'h5') {
    return (
      <h5 className={classnames('text-xl font-semibold lg:text-2xl', className)}>
        {children}
      </h5>
    )
  }
  if (variant === 'h6') {
    return (
      <h6 className={classnames('text-lg font-semibold lg:text-xl', className)}>
        {children}
      </h6>
    )
  }
  if (variant === 'subtitle1') {
    return (
      <p
        className={classnames(
          'text-lg leading-8 lg:text-2xl lg:leading-10',
          className
        )}
      >
        {children}
      </p>
    )
  }
  if (variant === 'subtitle2') {
    return (
      <p
        className={classnames(
          'text-lg leading-7 lg:text-[22px] lg:leading-10',
          className
        )}
      >
        {children}
      </p>
    )
  }
  if (variant === 'subtitle3') {
    return (
      <p
        className={classnames(
          'text-base leading-6 lg:text-lg lg:leading-8',
          className
        )}
      >
        {children}
      </p>
    )
  }
  if (variant === 'subtitle4') {
    return (
      <p
        className={classnames(
          'text-sm leading-4 lg:text-base lg:leading-6',
          className
        )}
      >
        {children}
      </p>
    )
  }
  if (variant === 'body1') {
    return (
      <p
        className={classnames(
          'text-xl leading-8 lg:text-2xl lg:leading-10',
          className
        )}
      >
        {children}
      </p>
    )
  }
  if (variant === 'body2') {
    return (
      <p
        className={classnames(
          'text-lg leading-7 lg:text-xl lg:leading-9',
          className
        )}
      >
        {children}
      </p>
    )
  }
  if (variant === 'body3') {
    return (
      <p
        className={classnames(
          'text-base leading-6 lg:text-lg lg:leading-8',
          className
        )}
      >
        {children}
      </p>
    )
  }

  return <>{children}</>
}
export default Typography
