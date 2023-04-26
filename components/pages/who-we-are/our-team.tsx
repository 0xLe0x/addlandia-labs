import ProfileCard from '@/components/common/Card/ProfileCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const profiles = [
  {
    avatar: '/images/photo_1.jpg',
    name: 'Thomas',
    title: 'Co-Founder',
  },
  {
    avatar: '/images/photo_2.jpg',
    name: 'Will',
    title: 'Co-Founder',
  },
  {
    avatar: '/images/photo_3.jpg',
    name: 'Dimitri',
    title: 'Head of Design',
  },
  {
    avatar: '/images/photo_4.jpg',
    name: 'Josh',
    title: 'Head of Development',
  },
  {
    avatar: '/images/photo_5.jpg',
    name: 'Alex',
    title: 'Lead Project Manager',
  },
  {
    avatar: '/images/photo_6.jpg',
    name: 'Brian',
    title: 'Lead Architect',
  },
]

const TeamSection = () => {
  return (
    <Container className="mb-40 lg:mb-80">
      <Typography variant="h3" className="mb-6">
        Our team
      </Typography>
      <Typography variant="subtitle1" className="max-w-[850px]">
        We&apos;re a team of designers, developers and technology experts who
        are passionate about technology and building dreams. We want to help our
        clients grow and be forces for good in the world.
      </Typography>
      <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => (
          <ProfileCard {...profile} key={profile.name} />
        ))}
      </div>
    </Container>
  )
}

export default TeamSection
