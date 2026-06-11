import { MemberType } from "@/types/membersTypes";
import { randomUUID } from "crypto";

export const membersData: MemberType[] = [
  {
    id: randomUUID(),
    name: "Ahmed",
    role: "Front end Instructor",
    techStack: ["Next.js", "TypeScript", "tailwind", "Node.js"],
    description:
      "Builds modern front-end experiences and guides the cohort through Next.js.",
    age: 29,
    gender: "Male",
    address: "Tunis, Tunisia",
    phone: "+216 55 123 456",
  },
  {
    id: randomUUID(),
    name: "Sarra",
    role: "Hackerspace Manager & Instructor",
    techStack: ["Html", "CSS", "JavaScript", "Excel"],
    description:
      "Supports learners, manages the hackerspace, and helps with practical workshops.",
    age: 31,
    gender: "Female",
    address: "Sousse, Tunisia",
    phone: "+216 55 234 567",
  },
  {
    id: randomUUID(),
    name: "Ali",
    role: "UI/UX Designer & Frontend Developer",
    techStack: ["Figma", "React", "Tailwind"],
    description:
      "Designs clean interfaces and turns them into responsive React components.",
    age: 27,
    gender: "Male",
    address: "Sfax, Tunisia",
    phone: "+216 55 345 678",
  },
];
