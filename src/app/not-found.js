import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Route Not Found</h2>
      <p style={{ textAlign: "center" }}>Could not find requested resource</p>
      <button>
        <Link href="/">View all routes</Link>
      </button>
    </div>
  );
}
