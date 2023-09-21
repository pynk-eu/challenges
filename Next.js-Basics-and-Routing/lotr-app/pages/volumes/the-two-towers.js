import Image from "next/image";
import Link from "next/link";
import { volumes } from "../Data/data";
export default function title2() {
  const vol2 = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <h1>{vol2.title}</h1>
      <p>{vol2.description}</p>
      <ul>
        {vol2.books.map((book) => (
          <li key={book.title}>{book.ordinal}</li>
        ))}
      </ul>
      <Image
        src="/image/the-two-towers.png"
        alt="cover img"
        width={140}
        height={230}
      />
      <button>
        <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      </button>
      <button>
        <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
      </button>
    </div>
  );
}
