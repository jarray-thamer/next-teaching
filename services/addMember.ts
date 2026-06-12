import { randomUUID } from "crypto";
import { MemberType } from "@/types/membersTypes";
import { readMembers, saveMembers } from "@/services/membersStore";

export const addMember = async (member: Omit<MemberType, "id">) => {
  // Simulate a database write delay.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const newMember: MemberType = {
    id: randomUUID(),
    ...member,
  };

  const membersData = await readMembers();
  membersData.push(newMember);
  await saveMembers(membersData);
  return newMember;
};
