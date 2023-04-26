import { FC } from 'react'

import Typography from '@/components/common/Typography'

import { TrackRecordCardProps } from './def'

const TrackRecordCard: FC<TrackRecordCardProps> = ({ title, children }) => {
  return (
    <div className="border-l border-gray-200 px-8 py-1">
      <Typography variant="h4" className="mb-4">
        {title}
      </Typography>
      <Typography variant="subtitle4">{children}</Typography>
    </div>
  )
}
export default TrackRecordCard
