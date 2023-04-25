import Image from 'next/image'
import { FC } from 'react'

import { ProfileCardProps } from './def'

const ProfileCard: FC<ProfileCardProps> = ({ avatar, name, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:items-start">
      <Image
        src={avatar}
        className="h-[320px] w-[480px] rounded-[16px] object-cover"
        alt={name}
        width={480}
        height={320}
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-center text-xl font-semibold sm:text-left">
          {name}
        </h3>
        <p className="text-lg">{title}</p>
      </div>
    </div>
  )
}
export default ProfileCard
