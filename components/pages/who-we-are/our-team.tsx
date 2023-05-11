import Fade from 'react-reveal/Fade'

import ProfileCard from '@/components/common/Card/ProfileCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const profiles = [
  {
    avatar: '/images/Thomas.jpg',
    name: 'Thomas',
    title: 'Co-Founder',
  },
  {
    avatar: '/images/Will.jpeg',
    name: 'Will',
    title: 'Co-Founder',
  },
  {
    avatar: '/images/photo_3.jpg',
    name: 'Dimitri',
    title: 'Head of Design',
  },
  {
    avatar: '/images/Brian.jpg',
    name: 'Brian',
    title: 'Lead Architect',
  },
  {
    avatar: '/images/Alex.jpg',
    name: 'Alex',
    title: 'Lead Project Manager',
  },
  {
    avatar: '/images/photo_4.jpg',
    name: 'Josh',
    title: 'Head of Development',
  },
]

const TeamSection = () => {
  return (
    <Container className="mb-40 flex flex-col gap-24 lg:mb-80 lg:gap-40 xl:flex-row">
      <Fade>
        <div className="flex-grow">
          <Typography variant="h3" className="mb-6">
            Our team
          </Typography>
          <Typography variant="subtitle1" className="max-w-[850px]">
            We&apos;re a team of designers, developers and technology experts
            who are passionate about technology and building dreams. We want to
            help our clients grow and be forces for good in the world.
          </Typography>
        </div>
      </Fade>
      <div className="mx-auto grid max-w-2xl basis-2/3 grid-cols-2 gap-x-8 gap-y-16 sm:mt-0">
        {profiles.map((profile) => (
          <ProfileCard {...profile} key={profile.name} />
        ))}
      </div>
    </Container>
  )
}

export default TeamSection
