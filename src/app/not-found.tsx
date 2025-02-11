import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col text-left">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/home">Return Home</Link>
    </div>
  );
}
