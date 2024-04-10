"use client";
import React from "react";

/**
 * 
 * ? 'reset' tries to recover from the error.
 * ? The deeper the error.tsx is in a folder, the more specific area the error will cover.
 * ? on the other hand, the 1st level error will cover most of the page.
 * ! The error.tsx will not affect the layout.tsx within the same or deeper level of the folder.
 * ! To solve this, you have to put the error.tsx 1 level folder outside of the layout.tsx
 */
const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      {error.name + `: ` + error.message}{" "}
      <button onClick={reset} className="px-4 py-2 bg-slate-500">Try again</button>
    </div>
  );
};

export default error;