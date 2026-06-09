import { membersData } from "@/data/membersData";

export async function getMemberDetails(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return membersData.find((member) => member.id === id);
}
