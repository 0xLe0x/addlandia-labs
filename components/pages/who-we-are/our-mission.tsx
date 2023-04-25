import Container from '../../common/Container'

const MissionSection = () => (
  <Container className="flex flex-col gap-16 py-28 sm:py-40 lg:gap-32 lg:py-80 xl:flex-row">
    <div className="flex-grow">
      <h2 className="mb-6 text-3xl font-bold sm:text-5xl">Our mission</h2>
      <p className="text-lg leading-8 sm:text-2xl sm:leading-[44px]">
        We are on a mission to help transform the digital landscape with
        blockchain-enabled platforms, one client at a time. We know how to
        channel beautiful design and robust development into innovative
        technology solutions. Our goal is to support our clients in harnessing
        the transformational power of blockchain from ideas through to delivery.
      </p>
    </div>
    <div className="flex flex-col gap-6 sm:gap-12 lg:min-w-[500px]">
      <div>
        <h1 className="mb-3 text-4xl font-semibold sm:mb-6 sm:text-6xl">
          44 million
        </h1>
        <p className="text-base sm:text-xl">Transactions every 24 hours</p>
      </div>
      <div>
        <h1 className="mb-3 text-4xl font-semibold sm:mb-6 sm:text-6xl">
          $119 trillion
        </h1>
        <p className="text-base sm:text-xl">Assets under holding</p>
      </div>
      <div>
        <h1 className="mb-3 text-4xl font-semibold sm:mb-6 sm:text-6xl">
          46,000
        </h1>
        <p className="text-base sm:text-xl">New users annually</p>
      </div>
    </div>
  </Container>
)

export default MissionSection
