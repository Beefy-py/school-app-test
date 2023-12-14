"use client";

import { featuresComponent } from "@/utils/content";
import { Button, Title } from "@mantine/core";
import { IconArrowBigRightLines } from "@tabler/icons-react";
import { theme } from "@tailwindConfig";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const FeaturesComponent = () => {
  const { colors } = theme as any;
  return (
    <section id="features" className="bg-transparent py-16 lg:py-40 relative">
      <h2
        data-aos="zoom-in"
        className="mb-6 font-bold text-xl lg:text-2xl text-center lg:text-left text-secondary-800"
      >
        Diensten
      </h2>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {featuresComponent.features.map((feat, index) => {
          return (
            <div
              key={index + feat.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="first:col-span-full lg:first:col-span-1 group/card border z-10 rounded-xl bg-gray-50 border-gray-200 p-10 hover:border-primary transition flex flex-col justify-between items-start"
            >
              <div className="content">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 group-hover/card:bg-primary/20 transition">
                  {feat.icon(
                    "w-5 h-5 text-primary-600 group-hover/card:text-primary transition lg:w-6 lg:h-6"
                  )}
                </div>
                <h3 className="mb-2 text-2xl font-bold font-cabin hover:text-primary transition cursor-pointer">
                  {feat.title}
                </h3>
                <p className="text-gray-500">{feat.description}</p>
              </div>
              <Button
                variant="transparent"
                className="group/btn !px-0"
                rightSection={
                  <IconArrowBigRightLines
                    size={18}
                    className="group-hover/btn:translate-x-1 transition"
                  />
                }
                color={colors.tertiary.DEFAULT}
              >
                Meer Info
              </Button>
            </div>
          );
        })}
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="3000"
        className="absolute -z-10 h-[50rem] w-[50rem] rotate-45 -right-60 top-0"
        style={{
          backgroundImage: `url('/images/blob.png')`,
          backgroundSize: "cover", // You can adjust this to 'contain' or other values
          backgroundPosition: "center", // You can adjust this if needed
        }}
      ></div>
      <motion.div className="box absolute right-32 bottom-20 z-[2] w-16 h-16 opacity-70">
        <motion.img
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            type: "tween",
            duration: 2,
            delay: 0.5,
          }}
          src={"/images/subtract.png"}
          alt="plus symbol image"
          width={60}
          height={60}
        />
      </motion.div>
    </section>
  );
};

export default FeaturesComponent;
