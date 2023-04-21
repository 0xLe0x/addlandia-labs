import Image from 'next/image'

import Container from '@/components/common/Container'

const Footer = () => (
  <footer className="py-20">
    <Container>
      <h3 className="mb-16 text-center text-2xl font-semibold">
        Trusted by the world&lsquo;s most innovative teams
      </h3>
      <div className="flex flex-wrap justify-center gap-y-4">
        {Array(5)
          .fill(0)
          .map((val, i) => (
            <Image
              src={`/images/brand_${i + 1}.png`}
              fill
              className="!static mx-auto !h-[70px] !w-auto"
              alt={`brand_${i}`}
              key={`brand_${i}`}
            />
          ))}
      </div>
    </Container>
    <Container className="flex justify-center">
      <div className="flex max-w-[1100px] flex-col items-center gap-10 py-60 lg:flex-row lg:items-stretch">
        <Image
          src="/images/photo_7.jpg"
          className="h-auto !w-[360px] rounded-[24px]"
          width={360}
          height={360}
          alt="photo_7"
        />
        <div className="flex flex-col gap-5 py-3">
          <h2 className="flex-grow text-xl font-semibold leading-9 sm:text-3xl sm:leading-[46px]">
            Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco
            consectetur ipsum elit consequat. Elit sunt proident ea nulla ad
            nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
          </h2>
          <div className="flex flex-col items-center text-lg lg:items-start">
            <h3 className="font-semibold">Judith Black</h3>
            <p>CEO of Workcation</p>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div className="flex flex-col gap-20 md:flex-row">
        <div className="basis-2/5">
          <h2 className="mb-7 text-2xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-lg leading-8">
            Can&lsquo;t find the answer you&lsquo;re looking for? Reach out to
            our&nbsp;
            <a href="#" className="text-primary">
              customer support
            </a>
            &nbsp;team.
          </p>
        </div>
        <div className="flex basis-3/5 flex-col gap-12">
          <div className="text-lg">
            <h4 className="mb-4 font-semibold">How do you make holy water?</h4>
            <p className="leading-8">
              You boil the hell out of it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
          <div className="text-lg">
            <h4 className="mb-4 font-semibold">
              What&lsquo;s the best thing about Switzerland?
            </h4>
            <p className="leading-8">
              I don&lsquo;t know, but the flag is a big plus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat.
            </p>
          </div>
          <div className="text-lg">
            <h4 className="mb-4 font-semibold">
              What do you call someone with no body and no nose?
            </h4>
            <p className="leading-8">
              Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
          <div className="text-lg">
            <h4 className="mb-4 font-semibold">
              Why do you never see elephants hiding in trees?
            </h4>
            <p className="leading-8">
              Because they&lsquo;re so good at it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
