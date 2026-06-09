"use client";
import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return (
    <button
      className="mt-4 py-2 px-4 bg-blue-100 rounded-md hover:bg-blue-200 transition"
      onClick={() => setLikes(likes + 1)}
    >
      👍️ Endorse ({likes})
    </button>
  );
};

export default LikeButton;
