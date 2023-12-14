"use client";
import { Button, Flex, Group, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NotFoundCardComponent = () => {
  return (
    <div className="space relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.6,
            y: -1000,
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          },
        }}
        className="mx-auto max-w-screen-sm text-center"
      >
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: -1000,
              },
              visible: {
                x: 0,
                transition: {
                  delay: 1,
                  duration: 1,
                },
              },
            }}
          >
            4
          </motion.span>{" "}
          0{" "}
          <motion.span
            className="inline-block"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: 1000,
              },
              visible: {
                x: 0,
                transition: {
                  delay: 2,
                  duration: 1,
                },
              },
            }}
          >
            4
          </motion.span>
        </h1>
        <Title
          order={2}
          className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
        >
          Oops! Bent u verdwaald?
        </Title>
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Title
            order={3}
            size={"h4"}
            className="mb-4 text-lg !font-light text-gray-500"
          >
            Hier vindt u enkele nuttige links om uw weg te vinden:
          </Title>
          <Group className="w-full" justify="center" gap="sm">
            <Button component={Link} href="/#home" variant="subtle">
              Home
            </Button>
          </Group>
        </Flex>
      </motion.div>
    </div>
  );
};

export default NotFoundCardComponent;
