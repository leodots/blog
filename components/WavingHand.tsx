import Image from 'next/image'

interface WavingHandProps {
  className?: string
}

const WavingHand = ({ className }: WavingHandProps) => (
  <Image
    src="/waving-hand.svg"
    alt="Waving Hand"
    width={28}
    height={28}
    className={className}
  />
)

export default WavingHand