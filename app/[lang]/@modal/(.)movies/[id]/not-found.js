import Link from 'next/link'

export default function ModalMovieIdNotFound({id}) {
  console.log(id)
  return (
    <div>
      <h2>{`This movie with ${id} id was not found!`}</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}