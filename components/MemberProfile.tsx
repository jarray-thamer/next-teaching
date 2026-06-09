import { MemberType } from "@/types/membersTypes";
import React from "react";

interface MemberProfileProps {
  member: MemberType;
}

const MemberProfile = ({ member }: MemberProfileProps) => {
  return (
    <div className="max-w-2xl bg-white p-8 rounded-xl shadow-md border-gray-200">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        {member.name || "Unknown Member"}
      </h1>
      <h2 className="text-xl text-blue-600 font-medium mb-6">{member.role}</h2>
      {(member.age || member.gender || member.address || member.phone) && (
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-6 border border-gray-200">
          {member.age && (
            <div>
              <span className="text-xs text-gray-500 uppercase font-bold block">
                Age:
              </span>
              <span className="text-gray-800">{member.age}</span>
            </div>
          )}
          {member.gender && (
            <div>
              <span className="text-xs text-gray-500 uppercase font-bold block">
                Gender:
              </span>
              <span className="text-gray-800">{member.gender}</span>
            </div>
          )}
          {member.address && (
            <div>
              <span className="text-xs text-gray-500 uppercase font-bold block">
                Address:
              </span>
              <span className="text-gray-800">{member.address}</span>
            </div>
          )}
          {member.phone && (
            <div>
              <span className="text-xs text-gray-500 uppercase font-bold block">
                Phone:
              </span>
              <span className="text-gray-800">{member.phone}</span>
            </div>
          )}
        </div>
      )}
      {member.description && (
        <div className="mb-6">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-2">
            About
          </h3>
          <p className="text-gray-700 leading-relaxed">{member.description}</p>
        </div>
      )}

      {member.techStack && member.techStack.length > 0 && (
        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-2">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2">
            {member.techStack.map((tech) => (
              <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-md font-medium text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberProfile;
