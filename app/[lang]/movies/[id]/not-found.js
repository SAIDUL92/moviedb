import Link from 'next/link'

export default function MovieIdNotFound(id) {
  return (
    <div>
      <h2>{`This movie with ${id} id was not found!!!!`}</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}