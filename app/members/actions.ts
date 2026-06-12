"use server";

import { revalidatePath } from "next/cache";
import { addMember } from "@/services/addMember";

export type FormState = { error: string };

export async function createMember(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim();
  if (!name) {
    return { error: "Name is required !" };
  }
  const role = (formData.get("role") as string)?.trim();
  if (!role) {
    return { error: "Role is required !" };
  }
  const techStack = (formData.get("techStack") as string)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await addMember({ name, role, techStack });

  revalidatePath("/members");

  return { error: "" }; // success case, no error
}
