import { readMembers } from "@/services/membersStore";

export async function getMemberDetails(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (id === "999") {
    throw new Error("Simulated fetch failure");
  }

  const membersData = await readMembers();
  return membersData.find((member) => member.id === id);
}
