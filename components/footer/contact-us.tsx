import Fade from 'react-reveal/Fade'

import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const ContactUsSection = () => {
  return (
    <Fade left>
      <div className="bg-[#0b0914]">
        <Container className="py-10 sm:py-40">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div>
              <Typography
                variant="h3"
                className="mb-2 text-center sm:text-left"
              >
                Ready to dive in?
              </Typography>
              <Typography variant="h3" className="text-center sm:text-left">
                Share your idea with us today
              </Typography>
            </div>
            <div>
              <Button href="/contact-us" fill primary>
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </Fade>
  )
}

export default ContactUsSection
