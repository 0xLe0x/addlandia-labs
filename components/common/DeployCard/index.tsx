import { FC } from "react";

import Button from "../Button";
import { DeployCardProps } from "./def";

const DeployCard: FC<DeployCardProps> = ({ icon, title, href, children }) => {
  return (
    <div className="basis-1/3 flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="flex-grow">{children}</div>
      <div>
        <Button href={href} primary showArrow noPadding>
          Learn more
        </Button>
      </div>
    </div>
  );
};
export default DeployCard;
