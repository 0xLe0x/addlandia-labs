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
          <Typography variant="h4" className="font-bold">
            Our services
          </Typography>
          <Typography variant="body2" className="py-2">
            We offer a end-to-end service from discovery through to design and
            development, as well as supporting our clients beyond launch.
          </Typography>
          <Typography variant="body2" className="py-2">
            We stress the importance of a thorough discovery process in order to
            help refine your brief. Time spent at this stage pays back in
            multiples later on.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 pt-10 text-lg sm:grid-cols-2 lg:gap-x-20 lg:gap-y-16 lg:pt-28">
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Discover - Technical Research "
          >
            Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
            semper morbi. Odio urna massa nunc massa.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Discover - Competitive Analysis"
          >
            Corporis asperiores ea nulla temporibus asperiores non tempore
            assumenda aut.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Design - User Experience (UX)  "
          >
            In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente
            dicta laboriosam.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Design - User Interface (UI)"
          >
            Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate
            eligendi fugiat sequi.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Develop - Web Development"
          >
            Quos inventore harum enim nesciunt. Aut repellat rerum omnis
            adipisci.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Develop - Mobile Development"
          >
            Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Strategy - Product Roadmap"
          >
            Eos laudantium repellat sed architecto earum unde incidunt. Illum
            sit dolores voluptatem.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Support - Maintenance & Security"
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
