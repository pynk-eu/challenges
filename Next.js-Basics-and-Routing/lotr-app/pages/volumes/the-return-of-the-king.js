import Image from "next/image";
import Link from "next/link";
import { volumes } from "../Data/data";
export default function title3() {
  const vol3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <div>
      <h1>{vol3.title}</h1>
      <p>{vol3.description}</p>
      <ul>
        {vol3.books.map((book) => (
          <li key={book.title}>{book.ordinal}</li>
        ))}
      </ul>
      <Image
        src="/image/the-return-of-the-king.png"
        alt="cover img"
        width={140}
        height={230}
      />
      <button>
        <Link href="/volumes/the-two-towers">Previous Volume</Link>
      </button>
    </div>
  );
}
