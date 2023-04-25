import Image from 'next/image'

import Container from '@/components/common/Container'

const Footer = () => (
  <footer className="pt-10 md:pt-20">
    {/* <Container className="flex justify-center">
      <div className="flex max-w-[1100px] flex-col items-center gap-10 py-32 md:py-60 lg:flex-row">
        <Image
          src="/images/photo_7.jpg"
          className="h-auto !w-[360px] rounded-[24px]"
          width={360}
          height={360}
          alt="photo_7"
        />
        <div className="flex flex-col gap-5 py-3">
          <h2 className="flex-grow text-center text-xl font-semibold leading-9 sm:text-3xl sm:leading-[46px] md:text-left">
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
    </Container> */}
    {/* <Container className='pb-20'>
      <div className="flex flex-col gap-20 md:flex-row">
        <div className="basis-2/5 text-center md:text-left">
          <h2 className="mb-7 text-2xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-lg leading-8">
            Can&apos;t find the answer you&apos;re looking for? Reach out to
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
              What&apos;s the best thing about Switzerland?
            </h4>
            <p className="leading-8">
              I don&apos;t know, but the flag is a big plus. Lorem ipsum dolor
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
              Because they&apos;re so good at it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
      </div>
    </Container> */}
    <div className="bg-gray-50">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="py-20">
          <div className="md:grid md:grid-cols-4 md:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image
                src="/logo-light-with-purple.png"
                alt="Addlandia Labs"
                width={50}
                height={35}
              />
              <p className="text-base">
                <span className="block">Empowering everyone to thrive</span>
                <span className="block">and prosper in Web3.</span>
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:col-span-2 md:col-start-3 md:grid-cols-2 xl:mt-0">
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-400">
                  Contact
                </h3>

                <a
                  href="mailto:contact@addlandia.com"
                  className="text-base text-gray-500 hover:text-gray-800"
                >
                  contact@addlandia.com
                </a>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-400">
                  Address
                </h3>

                <p className="text-gray-500">United House</p>
                <p className="text-gray-500">9 Pembridge Road</p>
                <p className="text-gray-500">London</p>
                <p className="text-gray-500">W11 3JY</p>
                <p className="text-gray-500">United Kingdom</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-base text-gray-600">
              &copy; 2023 Addlandia Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  </footer>
)

export default Footer
