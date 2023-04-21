import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

import Container from "../common/Container";
import DeployCard from "../common/DeployCard";

const Deploy = () => {
  return (
    <Container className="pb-32 pt-40">
      <div className="flex flex-col justify-center gap-4">
        <div className="text-center text-lg font-semibold text-primary">
          Deploy faster
        </div>
        <h2 className="text-center text-3xl sm:text-5xl font-bold">
          Everything you need to deploy your app
        </h2>
        <div className="text-2xl">
          <p className="py-2 text-center">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget
          </p>
          <p className="py-2 text-center">
            egestas a elementum pulvinar et feugiat blandit at. In mi viverra
            elit nunc.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-lg gap-12 pt-28">
        <DeployCard
          icon={<CloudArrowUpIcon className="h-6 w-6 text-primary" />}
          title="Push to deploy"
        >
          Commondo nec sagittis tortor mauris sed. Turpis tortor quis
          scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
          volutpat eu. Phasellus praesent ligula sit faucibus.
        </DeployCard>
        <DeployCard
          icon={<LockClosedIcon className="h-6 w-6 text-primary" />}
          title="SSL certificates"
        >
          Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis
          donec placerat sapien consequat tempor fermentum nibh.
        </DeployCard>
        <DeployCard
          icon={<ArrowPathIcon className="h-6 w-6 text-primary" />}
          title="Simple queues"
        >
          Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur
          viverra suspendisse iaculis eget. Nec mollis placerat ultricies
          euismod ut condimentum.
        </DeployCard>
      </div>
    </Container>
  );
};

export default Deploy;
