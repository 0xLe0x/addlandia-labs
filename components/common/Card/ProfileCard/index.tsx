import Image from 'next/image'
import { FC } from 'react'

import Typography from '@/components/common/Typography'

import { ProfileCardProps } from './def'

const ProfileCard: FC<ProfileCardProps> = ({ avatar, name, title }) => {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row" data-aos="fade-down">
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
        <Typography variant="subtitle3" className="text-primary">
          {title}
        </Typography>
      </div>
    </div>
  )
}
export default ProfileCard
