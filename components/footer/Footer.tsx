import Image from 'next/image'

import Container from '@/components/common/Container'

const Footer = () => (
  <footer className="">
    <div className="" id="contact">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="py-20">
          <div className="md:grid md:grid-cols-4 md:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image
                src="/logo-bottom.svg"
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
