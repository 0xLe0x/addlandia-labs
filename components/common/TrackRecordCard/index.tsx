import { FC } from "react";

import { TrackRecordCardProps } from "./def";

const TrackRecordCard: FC<TrackRecordCardProps> = ({ title, children }) => {
  return (
    <div className="border-l border-gray-200 px-8 py-1">
      <h2 className="mb-4 text-4xl font-semibold">{title}</h2>
      <p>{children}</p>
    </div>
  );
};
export default TrackRecordCard;
