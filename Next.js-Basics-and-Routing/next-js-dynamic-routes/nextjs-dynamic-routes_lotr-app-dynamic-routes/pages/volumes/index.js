import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  const handleRandomVolumeClick = (array) => {
    const randomVolume = array[Math.floor(Math.random() * array.length)];
    console.log(randomVolume);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }, id) => (
          <li key={id}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => handleRandomVolumeClick(volumes)}>
        Random Volume
      </button>
    </>
  );
}
