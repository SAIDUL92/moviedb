"use client";

import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {

  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Error:{error}</p>
    </div>
  );
}
