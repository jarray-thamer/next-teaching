import AddMemberForm from "@/components/AddMemberForm";
import LikeButton from "@/components/LikeButton";
import SearchBar from "@/components/SearchBar";
import { readMembers } from "@/services/membersStore";
import Link from "next/link";
import React from "react";

interface PageProps {
  searchParams: {
    q?: string;
  };
}

const page = async ({ searchParams }: PageProps) => {
  const query = ((searchParams?.q as string) || "").toLowerCase();
  const membersData = await readMembers();

  const filterdMembers = membersData.filter((member) => {
    if (!query) return true;

    const nameMatch = member.name?.toLowerCase().includes(query);
    const roleMatch = member.role?.toLowerCase().includes(query);
    const techMatch =
      member.techStack?.some((tech) => tech.toLowerCase().includes(query)) ??
      false;

    return nameMatch || roleMatch || techMatch;
  });

  return (
    <div className="">
      <h1 className="text-3xl mb-6">Cohort Directory</h1>
      <p className="text-sm text-gray-500 mt-1 mb-4">
        Seach and connect with developers in our local community.
      </p>
      <SearchBar />
      {/* Mapping all the fake data */}

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        {filterdMembers.map((member) => (
          <div
            key={member.id}
            className="p-6 bg-white rounded-xl shadow-md border border-gray-400"
          >
            <h2 className="text-2xl text-gray-800 font-bold">
              {member.name || "Annonymous"}
            </h2>
            <p className="text-md text-gray-500 mb-3">{member.role}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {member.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <LikeButton />
            <Link href={`/members/${member.id}`}>View More </Link>
          </div>
        ))}
      </div>
      <AddMemberForm />
    </div>
  );
};

export default page;
