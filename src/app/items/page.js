import Link from "next/link";

export default function ItemPage() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Items</h1>
      <Link href="/" style={{ alignItems: "center" }}>
        <button>Click to go to main page</button>
      </Link>
      <ul>
        <li>Books</li>
        <li>Keyboards</li>
        <li>Laptop</li>
      </ul>
    </>
  );
}
