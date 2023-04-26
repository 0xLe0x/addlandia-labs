import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const MissionSection = () => (
  <Container className="flex flex-col gap-16 py-28 sm:py-40 lg:gap-32 lg:py-80 xl:flex-row">
    <div className="flex-grow">
      <Typography variant="h3" className="mb-6">
        Our mission
      </Typography>
      <Typography variant="subtitle2">
        We are on a mission to help transform the digital landscape with
        blockchain-enabled platforms, one client at a time. We know how to
        channel beautiful design and robust development into innovative
        technology solutions. Our goal is to support our clients in harnessing
        the transformational power of blockchain from ideas through to delivery.
      </Typography>
    </div>
    <div className="flex flex-col gap-6 sm:gap-12 lg:min-w-[500px]">
      <div>
        <Typography variant="h2" className="mb-3 sm:mb-6">
          44 million
        </Typography>
        <Typography variant="subtitle2">Transactions every 24 hours</Typography>
      </div>
      <div>
        <Typography variant="h2" className="mb-3 sm:mb-6">
          $119 trillion
        </Typography>
        <Typography variant="subtitle2">Assets under holding</Typography>
      </div>
      <div>
        <Typography variant="h2" className="mb-3 sm:mb-6">
          46,000
        </Typography>
        <Typography variant="subtitle2">New users annually</Typography>
      </div>
    </div>
  </Container>
)

export default MissionSection
