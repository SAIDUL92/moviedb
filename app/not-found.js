import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-5 h-[100vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-[60px]">400</h1>
      <h2 className="font-bold text-[32px]">
        The Page you are requesting Could not found
      </h2>
      <Link className="text-blue-500" href="/">
        Return Home
      </Link>
    </div>
  );
}
