"use server";

import MemberProfile from "@/components/MemberProfile";
import { getMemberDetails } from "@/services/getMember";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const memberDetails = await getMemberDetails(params.id);

  if (!memberDetails) {
    return notFound();
  }

  return (
    <div>
      <MemberProfile member={memberDetails} />
    </div>
  );
};

export default page;
