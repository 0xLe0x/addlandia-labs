import Container from '../../common/Container'
import ProfileCard from '../../common/ProfileCard'

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
    <Container>
      <h2 className="mb-6 text-3xl font-bold sm:text-5xl">Our team</h2>
      <p className="max-w-[850px] text-lg leading-8 sm:text-2xl sm:leading-[44px]">
        We&apos;re a team of designers, developers and technology experts who
        are passionate about technology and building dreams. We want to help our
        clients grow and be forces for good in the world.
      </p>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {profiles.map((profile) => (
          <ProfileCard {...profile} key={profile.name} />
        ))}
      </div>
    </Container>
  )
}

export default TeamSection
