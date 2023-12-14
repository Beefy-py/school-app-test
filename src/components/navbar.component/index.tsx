"use client";

import { Button } from "@mantine/core";
import { IconLogin } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { useWindowScroll } from "@mantine/hooks";
import ScrollProgressComponent from "./scrollprogress.navbar";
import { navbarComponent } from "@/utils/content";
import { theme } from "@tailwindConfig";
import Image from "next/image";
import { motion } from "framer-motion";
import LgRegisterButtonWithMenuComponent from "./lg-register-button-with-menu.component";
import SmNavbarComponent from "./sm-navbar.component";

const NavbarComponent = () => {
  const [scroll] = useWindowScroll();
  const scrolled = scroll.y > 40;
  const { colors } = theme as any;
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`z-20 fixed top-0`}
      style={{
        width: "inherit",
      }}
    >
      <motion.nav
        id="navbar"
        className={`py-2.5 ${
          scrolled ? "bg-secondary-700 py-1" : ""
        } transition duration-500 mx-auto px-5 lg:px-10 xl:px-20`}
      >
        <div className={`flex flex-wrap justify-between items-center mx-auto`}>
          <Link href="/" className="flex w-16 h-16 relative">
            <Image src={navbarComponent.logo} alt="Bijles SR Logo" fill />
          </Link>

          <div className="flex items-center lg:order-2 gap-2">
            <div className="buttons hidden sm:block">
              <Button
                component={Link}
                href={`${process.env.NEXT_PUBLIC_GWAP_CMS_BASE_URL}/redirect?client_id=${process.env.NEXT_PUBLIC_GWAP_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GWAP_REDIRECT_URI}`}
                replace
                variant="outline"
                rightSection={<IconLogin size={16} />}
                color={colors.primary.DEFAULT}
                className={`!text-primary !bg-primary-50`}
              >
                {navbarComponent.ctaText1}
              </Button>

              <LgRegisterButtonWithMenuComponent />
            </div>
            <SmNavbarComponent />
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navbarComponent.links.map((link, index) => (
                <li key={index + link.name}>
                  <Link
                    href={"/" + link.path}
                    className={`block py-2 pr-4 pl-3"text-gray-800 hover:text-primary-600 lg:p-0 transition`}
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
      <ScrollProgressComponent scrolled={scrolled} />
    </motion.header>
  );
};

export default NavbarComponent;
