import { randomUUID } from "crypto";
import { membersData } from "@/data/membersData";
import { MemberType } from "@/types/membersTypes";

export const addMember = async (member: Omit<MemberType, "id">) => {
  // Simulate a database write delay.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const newMember: MemberType = {
    id: randomUUID(),
    ...member,
  };

  membersData.push(newMember);
  return newMember;
};
