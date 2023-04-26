import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

import ServiceCard from '@/components/common/Card/ServiceCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const BigOrSmallSection = () => {
  return (
    <div>
      <Container className="py-20 md:pb-32 md:pt-40">
        <div className="mx-auto flex max-w-[950px] flex-col justify-center gap-4">
          <Typography variant="h6" className="text-center text-primary">
            Deploy faster
          </Typography>
          <Typography variant="h3" className="text-center">
            Everything you need to deploy your app
          </Typography>
          <Typography variant="subtitle1" className="py-2 text-center">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-20 gap-y-16 pt-28 text-lg sm:gap-y-28 md:grid-cols-2">
          <ServiceCard
            icon={
              <CloudArrowUpIcon className="h-6 w-6 text-white sm:h-[30px] sm:w-[30px]" />
            }
            title="Push to deploy"
            large
          >
            Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
            semper morbi. Odio urna massa nunc massa.
          </ServiceCard>
          <ServiceCard
            icon={<LockClosedIcon className="h-[30px] w-[30px] text-white" />}
            title="SSL certificates"
            large
          >
            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget.
            Sem sodales gravida quam turpis enim lacus amet.
          </ServiceCard>
          <ServiceCard
            icon={<ArrowPathIcon className="h-[30px] w-[30px] text-white" />}
            title="Simple queues"
            large
          >
            Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
            Lobortis auctor congue commodo diam neque.
          </ServiceCard>
          <ServiceCard
            icon={<FingerPrintIcon className="h-[30px] w-[30px] text-white" />}
            title="Advanced security"
            large
          >
            Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
            aliquet hac quis. Id hac maecenas ac donec pharetra eget.
          </ServiceCard>
        </div>
      </Container>
    </div>
  )
}

export default BigOrSmallSection
