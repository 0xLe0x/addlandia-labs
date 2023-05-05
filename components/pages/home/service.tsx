import {
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'

import ServiceCard from '@/components/common/Card/ServiceCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const ServiceSection = () => {
  return (
    <div id="service">
      <Container className="py-20 md:pb-32 md:pt-40">
        <div className="mx-auto flex max-w-[950px] flex-col justify-center gap-4">
          <Typography variant="h6" className="text-center text-primary">
            Complete service
          </Typography>
          <Typography variant="h3" className="text-center">
            Build the right product, faster
          </Typography>
          <Typography variant="subtitle2" className="py-2 text-center">
            We translate your business needs into apps, software and branded
            websites that deliver powerful functionality with beautiful UX/UI
          </Typography>
        </div>
        <div className="flex flex-col gap-12 pt-28 text-lg md:flex-row">
          <ServiceCard
            icon={<PencilIcon className="h-6 w-6 text-primary" />}
            title="Product Design"
            href="/what-we-do"
          >
            There should be no limits on your own website, so we don&apos;t do
            watered down web design. Our team of award-winning designers brings
            decades of experience to the table, enabling us to take on any
            project. From enhancing existing UX/UI design to creating new
            concepts from scratch, our designers will bring your concept to
            life.
          </ServiceCard>
          <ServiceCard
            icon={<CodeBracketSquareIcon className="h-6 w-6 text-primary" />}
            title="Product Development"
            href="/what-we-do"
          >
            Trust our expert developers to bring your Web3 vision to life with
            seamless functionality and cutting-edge features. From bespoke
            platforms to complex integrations, we have the skills and resources
            to handle any project, big or small. Our commitment to best
            practices ensures that your platform is user-friendly, visually
            stunning, and optimized for success.
          </ServiceCard>
          <ServiceCard
            icon={<ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />}
            title="Product Strategy"
            href="/what-we-do"
          >
            Not sure where to start with web3? We can help. Whether you need
            advice on integrating blockchain tech into your business or
            navigating regulatory challenges, our experts offer tailored
            solutions to help you succeed in the digital world. Trust us to
            guide you through the fast-moving Web3 landscape and empower you to
            make informed decisions that drive your success.
          </ServiceCard>
        </div>
      </Container>
    </div>
  )
}

export default ServiceSection
