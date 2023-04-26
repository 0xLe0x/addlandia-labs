import type { PropsWithChildren } from 'react'

export interface TypographyProps extends PropsWithChildren {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle4' | 'body1' | 'body2' | 'body3'
  className?: string
}
