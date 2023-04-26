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
            Everything you need in one place
          </Typography>
          <Typography variant="subtitle2" className="py-2 text-center">
            Whether it is a web design makeover, development of an exciting new
            web platform or you are looking for expert advice, we are here to
            support you.
          </Typography>
        </div>
        <div className="flex flex-col gap-12 pt-28 text-lg md:flex-row">
          <ServiceCard
            icon={<PencilIcon className="h-6 w-6 text-primary" />}
            title="Design"
            href="#"
          >
            There should be no limits on your own website, so we don&apos;t do
            watered down web design, Our team of award-winning designers brings
            decades of experience to the table, enabling us to take on any
            project - from enhancing existing UX/UI design to creating new
            concepts from scratch.
          </ServiceCard>
          <ServiceCard
            icon={<CodeBracketSquareIcon className="h-6 w-6 text-primary" />}
            title="Develop"
            href="#"
          >
            Our specialist developers are experts in web3 technologies and can
            bring your concept to life using seamless functionality and best
            practices. From building bespoke platforms to integrating
            cutting-edge features, we have the expertise and resources to handle
            any project, big or small.
          </ServiceCard>
          <ServiceCard
            icon={<ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />}
            title="Advise"
            href="#"
          >
            Not ready to get started just yet? Don&apos;t worry, we are here to
            help you understand the fast-moving landscape of web3. Whether you
            are looking for advice on how to enhance your existing business with
            blockchain technologies, or you are seeking advice on the regulatory
            landscape - we can help.
          </ServiceCard>
        </div>
      </Container>
    </div>
  )
}

export default ServiceSection
