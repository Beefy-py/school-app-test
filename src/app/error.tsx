"use client";

import { Button, Text } from "@mantine/core";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="my-28 h-screen flex justify-center items-center content-center">
      <div className="-mt-32 flex flex-col items-center mx-2 sm:mx-6 md:mx-12 shadow-sm rounded-md border border-red-300 bg-red-100 p-10 md:p-20">
        <h1 className="text-red-400 text-lg md:text-xl font-semibold text-center">
          Something went wrong!
        </h1>
        <Text c="red.8" className="!my-3" ta="center">
          {error.message ?? "Client Error"}
        </Text>
        <Button
          onClick={() => reset()}
          variant="light"
          color="red"
          radius="md"
          className="text-md md:text-lg border border-transparent hover:border-red-500 transition"
        >
          Try Again
        </Button>
      </div>
    </main>
  );
}
