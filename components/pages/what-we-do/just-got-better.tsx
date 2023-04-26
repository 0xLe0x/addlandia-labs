import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

import FeatureCard from '@/components/common/Card/FeatureCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const JustGotBetterSection = () => {
  return (
    <Container className="flex flex-col justify-between gap-10 px-0 lg:flex-row">
      <div className="basis-1/2 items-center justify-center px-6 lg:max-w-2xl lg:px-0">
        <div className="mx-auto flex max-w-[950px] flex-col justify-center gap-4">
          <Typography variant="h6" className="text-primary">
            Deploy faster
          </Typography>
          <Typography variant="h4" className="font-bold">
            A better workflow
          </Typography>
          <Typography variant="body2" className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </Typography>
        </div>
        <div className="mt-10 flex flex-col gap-10 text-lg">
          <FeatureCard
            icon={<CloudArrowUpIcon className="h-6 w-6 text-primary" />}
            title="Push to deploy."
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </FeatureCard>
          <FeatureCard
            icon={<LockClosedIcon className="h-6 w-6 text-primary" />}
            title="SSL certificates."
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo.
          </FeatureCard>
          <FeatureCard
            icon={<ServerIcon className="h-6 w-6 text-primary" />}
            title="Database backups."
          >
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </FeatureCard>
        </div>
      </div>
      <div className="basis-1/2">
        <Image
          className="!static object-cover object-left lg:rounded-l-[16px]"
          alt="track-record"
          src={'/images/kryptoria.jpg'}
          fill
          sizes="auto"
        />
      </div>
    </Container>
  )
}

export default JustGotBetterSection
