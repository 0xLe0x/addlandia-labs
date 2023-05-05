import { CheckIcon } from '@heroicons/react/24/outline'

import ServiceCard from '@/components/common/Card/ServiceCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const OurServicesSection = () => {
  return (
    <div>
      <Container className="flex flex-col gap-x-10 gap-y-20 py-20 md:pb-32 md:pt-40 lg:flex-row">
        <div className="mx-auto flex max-w-[950px] flex-col gap-4">
          <Typography variant="h6" className="text-primary">
            Everything you need
          </Typography>
          <Typography variant="h4" className="font-bold">
            Our services
          </Typography>
          <Typography variant="body2" className="py-2">
            We offer an end-to-end service from discovery through to design and
            development, as well as supporting our clients beyond launch.
          </Typography>
          <Typography variant="body2" className="py-2">
            We stress the importance of a thorough discovery process in order to
            help refine your brief. Time spent at this stage pays back in
            multiples later on.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 text-lg sm:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Discover - Technical Research "
          >
            In-depth research to uncover the best solutions available for you.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Discover - Competitive Analysis"
          >
            Complete analysis of competitor solutions and how you can improve.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Design - User Experience (UX)  "
          >
            Full preliminary design work taking concepts through to wireframes.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Design - User Interface (UI)"
          >
            Bringing your vision to life with full designs and component libraries.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Develop - Web Development"
          >
            Building your dream one line of code at a time. We work across all tech stacks of note.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Develop - Mobile Development"
          >
            From native apps to mobile optimised platforms, we will keep you moving.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Strategy - Product Roadmap"
          >
            We work with you to unpack future product iterations to ensure you are always ahead.
          </ServiceCard>
          <ServiceCard
            icon={<CheckIcon className="h-6 w-6 text-primary" />}
            title="Support - Maintenance & Security"
          >
            Our work doesn&apos;t end when you launch. We help you stay on top of security and maintenance issues.
          </ServiceCard>
        </div>
      </Container>
    </div>
  )
}

export default OurServicesSection
