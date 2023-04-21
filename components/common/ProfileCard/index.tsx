import Image from "next/image";
import { FC } from "react";

import { ProfileCardProps } from "./def";

const ProfileCard: FC<ProfileCardProps> = ({ avatar, name, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Image
        src={avatar}
        className="rounded-full"
        alt={name}
        width={120}
        height={120}
      />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default ProfileCard;
