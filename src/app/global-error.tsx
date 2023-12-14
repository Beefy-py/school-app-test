"use client";
import "./globals.css";
import "@mantine/core/styles.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <head>
        <title>Root Client Error</title>
      </head>
      <body className="bg-white">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
