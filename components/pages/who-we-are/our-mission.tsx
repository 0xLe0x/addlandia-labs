import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const MissionSection = () => (
  <Container className="flex flex-col gap-16 py-28 sm:py-40 lg:gap-32 lg:py-80 xl:flex-row">
    <div className="flex-grow">
      <Typography variant="h3" className="mb-6">
        Our mission
      </Typography>
      <Typography variant="subtitle2" className="mb-10">
        Born out a deep passion for beautiful design and efficient development
        coalescing with the latest technologies, we are on a mission to
        transform the digital landscape one client at a time. By supporting our
        clients in discovering how they can embrace the latest technologies, we
        feel they are
      </Typography>
      <Typography variant="subtitle3" className="lg:max-w-[75%]">
        It is our belief that by harnessing the power of blockchain
        technologies, that ideas can take on a whole new dimension. Existing
        businesses can be turbocharged into new stages of growth. We have only
        just started to uncover the incredible applications of Web3. We want to
        help you discover your next great idea.
      </Typography>
    </div>
    <div className="flex flex-col gap-6 text-center sm:gap-12 sm:text-left lg:min-w-[500px]">
      <div>
        <Typography variant="h2" className="mb-3 sm:mb-6">
          £100M+
        </Typography>
        <Typography variant="subtitle2">Sales generated</Typography>
      </div>
      <div>
        <Typography variant="h2" className="mb-3 sm:mb-6">
          150K+
        </Typography>
        <Typography variant="subtitle2">Community members</Typography>
      </div>
      <div>
        <Typography variant="h2" className="mb-3 sm:mb-6">
          150+
        </Typography>
        <Typography variant="subtitle2">Smart contracts deployed</Typography>
      </div>
    </div>
  </Container>
)

export default MissionSection
