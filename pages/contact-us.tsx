import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'

import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import FormInput from '@/components/common/Form/Input'
import Typography from '@/components/common/Typography'

const ContactUsPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Container className="flex min-h-screen flex-col items-center gap-16 pt-32 lg:flex-row lg:items-start lg:pt-60">
        <div className="lg:basis-1/2 lg:px-8" data-aos="fade-down">
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
              <EnvelopeIcon className="h-7 w-7 text-gray-500" />
              <Typography variant="body2">contact@addlandia.com</Typography>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto lg:basis-1/2" data-aos="fade-down">
          <div className="flex max-w-xl flex-col gap-6">
            <div className="flex flex-col gap-8 sm:flex-row">
              <FormInput
                id="first_name"
                label="First name"
                className="basis-1/2"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormInput
                id="last_name"
                label="Last name"
                className="basis-1/2"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <FormInput
                id="email"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <FormInput
                id="phone"
                label="Phone number"
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <FormInput
                id="msg"
                label="Message"
                type="text"
                textarea
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-center lg:justify-end">
              <Button
                href={`mailto:contact@addlandia.com?subject=${firstName}%20${lastName}&body=${message}%0D%0A%0D%0A${firstName}%20${lastName}`}
                primary
                fill
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContactUsPage
