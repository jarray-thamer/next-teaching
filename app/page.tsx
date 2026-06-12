import Image from "next/image";
import cat from "./public/cat.webp";
import { getMemberDetails } from "@/services/getMember";

export default async function Home() {
  await getMemberDetails("1");
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-blue-700">GoMyCode Portal</h1>
      <p className="text-lg">
        Welcome to the central hub for our software development bootcamp.
        <br />
        Navigate to the Members page to see our cohort!
      </p>
      <div style={{ width: "360px", maxWidth: "100%" }}>
        <div
          style={{
            height: "0",
            paddingBottom: "177.78%",
            position: "relative",
          }}
        >
          <iframe
            width="360"
            height="640"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            src="https://imgflip.com/embed/83nqe1"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
