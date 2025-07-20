"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-full">
      <h2>Something went wrong!, ADMIN</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
