import Container from '../common/Container'
import ProfileCard from '../common/ProfileCard'

const profiles = [
  {
    avatar: '/images/photo_1.jpg',
    name: 'Michael Foster',
    title: 'Co-Founder / CTO',
  },
  {
    avatar: '/images/photo_2.jpg',
    name: 'Dries Vincent',
    title: 'Business Relations',
  },
  {
    avatar: '/images/photo_3.jpg',
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
  },
  {
    avatar: '/images/photo_4.jpg',
    name: 'Courteny Henry',
    title: 'Designer',
  },
  {
    avatar: '/images/photo_5.jpg',
    name: 'Tom Cook',
    title: 'Director of Product',
  },
  {
    avatar: '/images/photo_6.jpg',
    name: 'Whitney Francis',
    title: 'Copywriter',
  },
]

const Team = () => {
  return (
    <Container className="py-20 md:py-40 text-center md:text-left">
      <h2 className="mb-6 text-3xl font-bold sm:text-5xl">Our team</h2>
      <p className="text-xl leading-9">
        We&lsquo;re a dynamic group of individuals who are passionate about what
        we do
      </p>
      <p className="text-xl leading-9">
        and dedicated to delivering the best results for our clients
      </p>
      <div className="mt-24 flex flex-wrap justify-center gap-20">
        {profiles.map((profile) => (
          <ProfileCard {...profile} key={profile.name} />
        ))}
      </div>
    </Container>
  )
}

export default Team
