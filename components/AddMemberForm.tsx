"use client";
import React from "react";

import { createMember } from "@/app/members/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

const initialState = { error: "" };

const AddMemberForm = () => {
  const [state, formAction] = useFormState(createMember, initialState);

  return (
    <form
      action={formAction}
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

      {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
      <SubmitButton />
    </form>
  );
};

export default AddMemberForm;
