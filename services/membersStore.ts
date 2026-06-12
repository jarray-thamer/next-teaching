import { readFile, writeFile } from "fs/promises";
import path from "path";
import { membersData } from "@/data/membersData";
import { MemberType } from "@/types/membersTypes";

const membersFilePath = path.join(process.cwd(), "data", "membersData.json");

async function ensureMembersFile() {
  try {
    await readFile(membersFilePath, "utf-8");
  } catch {
    await writeFile(
      membersFilePath,
      JSON.stringify(membersData, null, 2),
      "utf-8",
    );
  }
}

export async function readMembers(): Promise<MemberType[]> {
  await ensureMembersFile();

  const fileContents = await readFile(membersFilePath, "utf-8");
  return JSON.parse(fileContents) as MemberType[];
}

export async function saveMembers(members: MemberType[]) {
  await writeFile(membersFilePath, JSON.stringify(members, null, 2), "utf-8");
}
