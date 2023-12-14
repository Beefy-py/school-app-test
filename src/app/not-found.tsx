import "./globals.css";
import React from "react";
import NotFoundCardComponent from "@/components/not-found-card.component";

const Error404Page = () => {
  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-28 lg:px-8">
        <NotFoundCardComponent />
      </div>
    </section>
  );
};

export default Error404Page;
