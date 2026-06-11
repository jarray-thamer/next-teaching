import React from "react";

import { createMember } from "@/app/members/actions";

const AddMemberForm = () => {
  return (
    <form
      action={createMember}
      className="mb-8 p-6 bg-white rounded-xl shadow-md border-[15px] border-gray-200 space-y-3"
    >
      <h2 className="text-xl font-bold text-gray-800">Add a new member</h2>
      <input
        name="name"
        placeholder="Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        name="role"
        placeholder="Role"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        name="techStack"
        placeholder="TechStack"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        className="py-2 px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Enter
      </button>
    </form>
  );
};

export default AddMemberForm;
