import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>The Page you are requesting Could not found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}