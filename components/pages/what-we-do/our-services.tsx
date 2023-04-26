import { CheckIcon } from '@heroicons/react/24/outline'

import ServiceCard from '@/components/common/Card/ServiceCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const OurServicesSection = () => {
  return (
    <div>
      <Container className="flex flex-col gap-10 py-20 md:pb-32 md:pt-40 lg:flex-row">
        <div className="mx-auto flex max-w-[950px] flex-col justify-center gap-4">
          <Typography variant="h6" className="text-primary">
            Everything you need
          </Typography>
          <Typography variant="h4" className="font-bold">All-in-one platform</Typography>
          <Typography variant="body2" className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 pt-10 text-lg sm:grid-cols-2 lg:gap-x-20 lg:gap-y-16 lg:pt-28">
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Invite team members"
          >
            Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
            semper morbi. Odio urna massa nunc massa.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="List view"
          >
            Corporis asperiores ea nulla temporibus asperiores non tempore
            assumenda aut.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Keyboard shortcuts"
          >
            In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente
            dicta laboriosam.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Calendars"
          >
            Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate
            eligendi fugiat sequi.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Notifications"
          >
            Quos inventore harum enim nesciunt. Aut repellat rerum omnis
            adipisci.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Boards"
          >
            Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Reporting"
          >
            Eos laudantium repellat sed architecto earum unde incidunt. Illum
            sit dolores voluptatem.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Mobile app"
          >
            Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis
            quidem voluptatem.
          </ServiceCard>
        </div>
      </Container>
    </div>
  )
}

export default OurServicesSection
