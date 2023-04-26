import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const ContactUsPage = () => {
  return (
    <>
      <Container className="flex h-screen flex-col items-center lg:flex-row">
        <div className="basis-1/2">
          <Typography variant="h3" className="mb-8">
            Let&apos;s talk
          </Typography>
          <Typography variant="body2">
            We love hearing new ideas. Get in touch with us to organise a free,
            no obligation consultancy call.
          </Typography>
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <BuildingOffice2Icon className="h-7 w-7 text-gray-500" />
              <Typography variant="body2">
                United House, 9 Pembridge Road, London, W11 3JY
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-7 w-7 text-gray-500" />
              <Typography variant="body2">+1 (555) 234-5678</Typography>
            </div>
            <div className="flex items-center gap-4">
              <EnvelopeIcon className="h-7 w-7 text-gray-500" />
              <Typography variant="body2">contact@addlandia.com</Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContactUsPage
