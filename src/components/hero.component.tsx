"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import React from "react";
import { IconArrowBigRightLine } from "@tabler/icons-react";
import { theme } from "@tailwindConfig";
import { Image, Button, Text, Title } from "@mantine/core";
import { heroComponent } from "@/utils/content";
import classes from "@/styles/HeroComponent.module.css";
import { motion } from "framer-motion";
import { useViewportSize } from "@mantine/hooks";

const HeroComponent = () => {
  const { width } = useViewportSize();
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { colors } = theme as any;

  const isSmallerThanTabletScreen = width < 780;

  return (
    <section
      id="home"
      className="mb-8 sm:mb-16 lg:mb-28 -mx-5 lg:-mx-10 xl:-mx-20 relative bg-secondary"
    >
      <div className="box absolute left-32 top-32 z-[2] w-24 h-24 opacity-70">
        <motion.img
          animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            type: "tween",
            duration: 3,
            delay: 0.8,
          }}
          src={"/images/percentage.png"}
          alt="plus symbol image"
          width={80}
          height={80}
        />
      </div>

      {/*Pulsing Circle */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 z-0 bg-secondary-400 w-[50rem] h-[50rem] opacity-70"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          repeat: Infinity,
          type: "tween",
          duration: 4,
          delay: 1.5,
        }}
        style={{
          borderRadius: "50%",
        }}
      />

      {/*Dotted Circle */}
      <motion.svg
        className="absolute top-1/4 lg:top-auto lg:right-0 lg:bottom-0 z-2 w-[30rem] h-[30rem] fill-secondary-700"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M952.5 647Q905 794 780 885t-280 91q-155 0-280-91T47.5 647Q0 500 47.5 353T220 115q125-91 280-91t280 91q125 91 172.5 238t0 294Z"
            />
          </clipPath>
          <pattern
            id="b"
            patternUnits="userSpaceOnUse"
            width="25"
            height="25"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="12.5" />
          </pattern>
        </defs>
        <g clip-path="url(#a)">
          <path
            fill="url(#b)"
            d="M952.5 647Q905 794 780 885t-280 91q-155 0-280-91T47.5 647Q0 500 47.5 353T220 115q125-91 280-91t280 91q125 91 172.5 238t0 294Z"
          />
        </g>
      </motion.svg>
      <div
        className={`${classes.hero} grid grid-cols-12 py-20 px-5 lg:px-10 xl:px-20 items-center lg:gap-20`}
      >
        <motion.div
          initial={{
            ...(isSmallerThanTabletScreen ? { y: -1000 } : { x: -1000 }),
          }}
          animate={{
            ...(isSmallerThanTabletScreen ? { y: 0 } : { x: 0 }),
          }}
          className="col-span-full lg:col-span-6"
        >
          <div
            className={`${classes.container} flex flex-col items-center lg:items-start`}
          >
            <Title
              className={
                classes.title +
                " !font-cabin font-extrabold text-3xl lg:!text-5xl"
              }
            >
              {heroComponent.title}
            </Title>
            {/* Carousel for smaller screens */}
            <div className="lg:hidden h-full p-6 flex items-center justify-center relative">
              <motion.div
                className="box absolute left-5 sm:left-10 top-40 z-[2] w-10 h-10 sm:w-16 sm:h-16 opacity-70"
                animate={{ scale: [1, 1.1, 1], x: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  type: "tween",
                  duration: 4,
                  delay: 0.5,
                }}
              >
                <Image
                  src={"/images/equal-sign.png"}
                  alt="plus symbol image"
                  width={30}
                  height={30}
                />{" "}
              </motion.div>
              <div className="box absolute left-1/4 -bottom-10 sm:bottom-10 z-[2] w-16 h-16 sm:w-24 sm:h-24 opacity-70">
                <motion.img
                  animate={{ rotate: [0, 45, 0] }}
                  transition={{
                    repeat: Infinity,
                    type: "tween",
                    duration: 1.5,
                    delay: 0.5,
                  }}
                  src={"/images/plus-math.png"}
                  alt="plus symbol image"
                  width={80}
                  height={80}
                />{" "}
              </div>
              <Carousel
                loop
                plugins={[autoplay.current]}
                className="hero-slider w-3/4 md:w-1/2"
                styles={{
                  viewport: {
                    borderRadius: "50%",
                    // width: "40vw",
                    // height: "40vh",
                  },
                }}
                withControls={false}
              >
                {heroComponent.imageSlider.map((img, index) => (
                  <Carousel.Slide key={index + img.title}>
                    <Image
                      radius="lg"
                      w="auto"
                      fit="contain"
                      src={img.src}
                      alt={img.title}
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
            <Text
              className={`${classes.description} text-center lg:text-left py-12`}
              size="xl"
              mt="xl"
              mb="xl"
            >
              {heroComponent.subTitle}
            </Text>
            <Button
              rightSection={
                <IconArrowBigRightLine className="group-hover:translate-x-1 transition" />
              }
              component={Link}
              href="/hello"
              className="mt-2 group z-0 transition"
              variant="filled"
              size="lg"
              color={colors.primary.DEFAULT}
            >
              {heroComponent.ctaText}
            </Button>
          </div>
        </motion.div>{" "}
        {/* Carousel for larger screens */}
        <div className="hidden lg:flex -mt-24 lg:-mt-0 h-full p-6 col-span-full lg:col-span-6 items-center justify-center relative">
          <motion.div
            className="box absolute right-10 bottom-40 z-[2] w-16 h-16 opacity-70"
            animate={{ scale: [1, 1.1, 1], x: [0, 15, 0] }}
            transition={{
              repeat: Infinity,
              type: "tween",
              duration: 4,
              delay: 0.5,
            }}
          >
            <Image
              src={"/images/equal-sign.png"}
              alt="plus symbol image"
              width={30}
              height={30}
            />{" "}
          </motion.div>{" "}
          <div className="box absolute right-32 -bottom-32 z-[2] w-24 h-24 opacity-70">
            <motion.img
              animate={{ rotate: [0, 45, 0] }}
              transition={{
                repeat: Infinity,
                type: "tween",
                duration: 1.5,
                delay: 0.5,
              }}
              src={"/images/plus-math.png"}
              alt="plus symbol image"
              width={80}
              height={80}
            />{" "}
          </div>
          <Carousel
            loop
            plugins={[autoplay.current]}
            className="hero-slider"
            styles={{
              viewport: {
                borderRadius: "50%",
                maxWidth: "1000px",
              },
            }}
            withControls={false}
          >
            {heroComponent.imageSlider.map((img, index) => (
              <Carousel.Slide key={index + img.title}>
                <Image
                  radius="lg"
                  w="auto"
                  fit="contain"
                  src={img.src}
                  alt={img.title}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
      {/*Wave*/}
      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#bbeeee"
          fill-opacity="1"
          d="M0,256L34.3,261.3C68.6,267,137,277,206,261.3C274.3,245,343,203,411,160C480,117,549,75,617,90.7C685.7,107,754,181,823,176C891.4,171,960,85,1029,58.7C1097.1,32,1166,64,1234,74.7C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroComponent;
