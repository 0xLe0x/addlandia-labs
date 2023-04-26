import { FC } from 'react'

import { FeatureCardProps } from './def'

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, children }) => {
  return (
    <div className="flex gap-4">
      <div>
        <div className="pt-1">{icon}</div>
      </div>
      <div>
        <p className="text-lg leading-8 lg:text-xl lg:leading-8">
          <span className="font-semibold text-black">{title}</span>
          &nbsp;
          <span>{children}</span>
        </p>
      </div>
    </div>
  )
}
export default FeatureCard
