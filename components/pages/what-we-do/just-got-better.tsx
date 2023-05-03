import {
  LockClosedIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

import FeatureCard from '@/components/common/Card/FeatureCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const JustGotBetterSection = () => {
  return (
    <Container className="flex flex-col justify-between gap-10 px-0 lg:flex-row">
      <div
        className="basis-1/2 items-center justify-center px-6 lg:max-w-2xl lg:px-0"
        data-aos="fade-down"
      >
        <div className="mx-auto flex max-w-[950px] flex-col justify-center gap-4">
          <Typography variant="h6" className="text-primary">
            Case study
          </Typography>
          <Typography variant="h4" className="font-bold">
            Blockchain gaming: Kryptoria
          </Typography>
          <Typography variant="body2" className="py-2">
            Kryptoria launched in 2022 to push the boundaries of what blockchain
            gaming could achieve. Despite a relatively nascent, market,
            Kryptoria pioneered hyper-gas efficient modified ERC-721 contracts,
            with dynamic metadata, all built inside the Unity game engine with
            custom blockchain integrations.
          </Typography>
        </div>
        <div className="mt-10 flex flex-col gap-10 text-lg">
          <FeatureCard
            icon={<WrenchScrewdriverIcon className="h-6 w-6 text-primary" />}
            title="Modified ERC-721"
          >
            Kryptoria needed to devise a method by which IPFS stored metadata
            could be rewritten as part of a multi-signatory contract. This
            enabled for NFT game assets to evolve post mint
          </FeatureCard>
          <FeatureCard
            icon={<LockClosedIcon className="h-6 w-6 text-primary" />}
            title="ERC-20"
          >
            Full on-chain tokenomics modelling and ERC-20 contract deployment.
            Ellerium was born!
          </FeatureCard>
          <FeatureCard
            icon={
              <Image
                src="/images/unity.png"
                width={24}
                height={28}
                alt="unity"
              />
            }
            title="Built in Unity"
          >
            Massive Multiplayer Online Game (MMOG) built using the Unity game
            engine and integrated with the Ethereum blockchain
          </FeatureCard>
        </div>
      </div>
      <div className="basis-1/2">
        <Image
          className="!static object-cover object-left lg:rounded-l-[16px]"
          alt="track-record"
          src={'/images/kryptoria.jpg'}
          fill
          sizes="auto"
        />
      </div>
    </Container>
  )
}

export default JustGotBetterSection
