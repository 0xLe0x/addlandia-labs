import { FC } from "react";
import { ContainerProps } from "./def";
const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="flex justify-center">
      <div className={`w-full max-w-[1600px] px-9 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
