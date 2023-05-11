import { FC } from 'react'
import Fade from 'react-reveal/Fade'

import { FeatureCardProps } from './def'

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, children }) => {
  return (
    <Fade>
      <div className="flex gap-4">
        <div>
          <div className="w-6 pt-1">{icon}</div>
        </div>
        <div>
          <p className="text-lg leading-8 lg:text-xl lg:leading-8">
            <span className="font-semibold text-secondary">{title}</span>
            &nbsp;
            <span>{children}</span>
          </p>
        </div>
      </div>
    </Fade>
  )
}
export default FeatureCard
