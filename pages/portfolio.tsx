import Image from 'next/image'

const works = [
  { src: '/images/work1.jpg', alt: 'Work 1' },
  { src: '/images/work2.jpg', alt: 'Work 2' },
  { src: '/images/work3.jpg', alt: 'Work 3' },
]

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {works.map((work) => (
          <Image key={work.src} src={work.src} alt={work.alt} width={300} height={200} />
        ))}
      </div>
    </div>
  )
}
