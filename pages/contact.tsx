import Image from 'next/image'

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        You can reach me via email at{' '}
        <a href="mailto:example@example.com">example@example.com</a>.
      </p>
      <p>Or scan the QR code below:</p>
      <Image src="/images/qrcode.png" alt="QR code" width={200} height={200} />
    </div>
  )
}
