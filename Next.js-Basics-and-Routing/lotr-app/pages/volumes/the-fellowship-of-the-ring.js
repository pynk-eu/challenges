import Image from "next/image";
import Link from "next/link";
import { volumes } from "../Data/data";
export default function title1() {
  const vol1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <div>
      <h1>{vol1.title}</h1>
      <p>{vol1.description}</p>
      <ul>
        {vol1.books.map((book) => (
          <li key={book.title}>{book.ordinal}</li>
        ))}
      </ul>
      <Image
        src="/image/the-fellowship-of-the-ring.png"
        alt="cover img"
        width={140}
        height={230}
      />
      <button>
        <Link href="/volumes">Previous Volume All</Link>
      </button>
      <button>
        <Link href="/volumes/the-two-towers">Next Volume</Link>
      </button>
    </div>
  );
}
