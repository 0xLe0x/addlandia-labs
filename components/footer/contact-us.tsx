import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const ContactUsPage = () => {
  return (
    <div className="bg-[#E0E7FF]">
      <Container className="py-10 sm:py-40">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-8">
          <div>
            <Typography variant="h3" className="text-center sm:text-left">
              Ready to dive in?
            </Typography>
            <Typography variant="h3" className="text-center sm:text-left">
              Start your free trial today.
            </Typography>
          </div>
          <div>
            <Button href="#contact" fill primary>
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactUsPage
