import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/store">Store</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>{children}</main>
    </div>
  )
}
