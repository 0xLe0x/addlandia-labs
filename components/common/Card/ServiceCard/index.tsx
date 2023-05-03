import classnames from 'classnames'
import { FC } from 'react'

import Button from '@/components/common/Button'
import Typography from '@/components/common/Typography'

import { ServiceCardProps } from './def'

const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  href,
  large,
  children,
}) => {
  if (href) {
    return (
      <div className="flex basis-1/3 flex-col gap-5" data-aos="fade-down">
        <div className="flex items-center gap-4">
          {icon}
          <Typography variant="h6" className="font-semibold">
            {title}
          </Typography>
        </div>
        <Typography variant="body2" className="flex-grow">
          {children}
        </Typography>
        <div className="flex">
          <Button href={href} primary showArrow noPadding>
            Learn more
          </Button>
        </div>
      </div>
    )
  }

  const iconClassName = large ? 'bg-primary p-[8px] sm:p-[15px]' : ''

  return (
    <div className="flex gap-5 sm:gap-9" data-aos="fade-down">
      <div>
        <div className={classnames('rounded-lg', iconClassName)}>{icon}</div>
      </div>
      {large ? (
        <div>
          <Typography variant="h5" className="mb-4">
            {title}
          </Typography>
          <Typography variant="body1">{children}</Typography>
        </div>
      ) : (
        <div>
          <Typography variant="h6" className="mb-4">
            {title}
          </Typography>
          <Typography variant="body2">{children}</Typography>
        </div>
      )}
    </div>
  )
}
export default ServiceCard
