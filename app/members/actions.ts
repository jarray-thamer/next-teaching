"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addMember } from "@/services/addMember";

export async function createMember(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const techStack = (formData.get("techStack") as string)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await addMember({ name, role, techStack });

  revalidatePath("/members");
  redirect("/members");
}
