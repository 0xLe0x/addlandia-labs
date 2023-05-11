import Image from 'next/image'
import { FC } from 'react'
import Fade from 'react-reveal/Fade'

import Typography from '@/components/common/Typography'

import { ProfileCardProps } from './def'

const ProfileCard: FC<ProfileCardProps> = ({ avatar, name, title }) => {
  return (
    <Fade top>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <Image
          src={avatar}
          className="h-[75px] w-[75px] rounded-full object-cover"
          alt={name}
          width={75}
          height={75}
        />
        <div className="flex flex-col justify-center ">
          <Typography variant="h6" className="text-center sm:text-left">
            {name}
          </Typography>
          <Typography
            variant="subtitle3"
            className="text-center text-primary lg:text-left"
          >
            {title}
          </Typography>
        </div>
      </div>
    </Fade>
  )
}
export default ProfileCard
