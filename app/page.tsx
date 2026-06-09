import Image from "next/image";
import cat from "./public/cat.webp";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-blue-700">GoMyCode Portal</h1>
      <p className="text-lg">
        Welcome to the central hub for our software development bootcamp.
        <br />
        Navigate to the Members page to see our cohort!
      </p>
      <Image src={cat} width={240} height={240} alt="cat" />
    </div>
  );
}
