import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

import Container from '../../common/Container'
import DeployCard from '../../common/DeployCard'

const DeploySection = () => {
  return (
    <div>
      <Container className="py-20 md:pb-32 md:pt-40">
        <div className="mx-auto flex max-w-[950px] flex-col justify-center gap-4">
          <h4 className="text-center text-lg font-semibold text-primary">
            Deploy faster
          </h4>
          <h2 className="text-center text-3xl font-bold sm:text-5xl">
            Everything you need to deploy your app
          </h2>
          <p className="py-2 text-center text-2xl leading-10">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="flex flex-col gap-12 pt-28 text-lg md:flex-row">
          <DeployCard
            icon={<CloudArrowUpIcon className="h-6 w-6 text-primary" />}
            title="Design"
          >
            There should be no limits on your own website, so we don&apos;t do
            watered down web design, Our team of award-winning designers brings
            decades of experience to the table, enabling us to take on any
            project - from enhancing existing UX/UI design to creating new
            concepts from scratch.
          </DeployCard>
          <DeployCard
            icon={<LockClosedIcon className="h-6 w-6 text-primary" />}
            title="Develop"
          >
            Our specialist developers are experts in web3 technologies and can
            bring your concept to life using seamless functionality and best
            practices. From building bespoke platforms to integrating
            cutting-edge features, we have the expertise and resources to handle
            any project, big or small.
          </DeployCard>
          <DeployCard
            icon={<ArrowPathIcon className="h-6 w-6 text-primary" />}
            title="Advise"
          >
            Not ready to get started just yet? Don&apos;t worry, we are here to
            help you understand the fast-moving landscape of web3. Whether you
            are looking for advice on how to enhance your existing business with
            blockchain technologies, or you are seeking advice on the regulatory
            landscape - we can help.
          </DeployCard>
        </div>
      </Container>
    </div>
  )
}

export default DeploySection
