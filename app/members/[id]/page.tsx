"use server";

import NotFound from "@/app/not-found";
import MemberProfile from "@/components/MemberProfile";
import { getMemberDetails } from "@/services/getMember";

const page = async ({ params }: { params: { id: string } }) => {
  const memberDetails = await getMemberDetails(params.id);

  if (!memberDetails) {
    return <NotFound />;
  }

  return (
    <div>
      <MemberProfile member={memberDetails} />
    </div>
  );
};

export default page;
