"use client";
import { navbarComponent } from "@/utils/content";
import { Button, Divider, Menu, SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { theme } from "@tailwindConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LgRegisterButtonWithMenuComponent = () => {
  const { width } = useViewportSize();
  const { colors } = theme as any;
  const isSmallScreen = width < 700;

  return (
    <Menu
      width={isSmallScreen ? 300 : 700}
      shadow="md"
      position="bottom-end"
      withArrow
      arrowPosition="center"
    >
      <Menu.Target>
        <Button
          color={colors.tertiary["300"]}
          variant="subtle"
          className="!text-tertiary-900"
          rightSection={<IconChevronDown size={16} />}
        >
          {navbarComponent.ctaText2}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <SimpleGrid
          cols={isSmallScreen ? 1 : 2}
          spacing="xs"
          verticalSpacing="xs"
        >
          {!isSmallScreen && (
            <Menu.Item
              className="relative h-auto z-10"
              style={{
                backgroundImage: "url(/images/gwap-app.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              styles={{
                item: {
                  padding: "3rem",
                },
              }}
            >
              <div className="-z-10 bg-black/20 backdrop-blur-[2px] rounded absolute top-0 left-0 right-0 bottom-0"></div>
              <div className="overlay-content z-10">
                <p className="text-white font-semibold">
                  Download de GWAP-app uit de Play Store of App Store en begin
                  vandaag nog met betalen!
                </p>
                <Link
                  href={"/"}
                  className="cursor-pointer flex mt-3 py-2 bg-black text-white rounded items-center justify-center"
                >
                  <div className="mr-3">
                    <Image
                      src={"/images/apple-store-logo.png"}
                      width={25}
                      height={25}
                      alt="apple app store logo"
                    />
                  </div>
                  <div>
                    <div className="text-xs">Download via de</div>
                    <div className="text-sm font-semibold -mt-1">App Store</div>
                  </div>
                </Link>
                <Divider
                  my="xs"
                  color="white"
                  label="Or"
                  labelPosition="center"
                />
                <Link
                  href={"/"}
                  className="flex mt-3 bg-black py-2 text-white rounded items-center justify-center"
                >
                  <div className="mr-3">
                    <Image
                      src={"/images/google-play-logo.png"}
                      width={25}
                      height={25}
                      alt="google play store logo"
                    />
                  </div>
                  <div>
                    <div className="text-xs">Download via</div>
                    <div className="text-sm font-semibold font-sans -mt-1">
                      Google Play
                    </div>
                  </div>
                </Link>
              </div>
            </Menu.Item>
          )}
          <Menu.Item
            component={Link}
            href="/gwap-register"
            // target="_blank"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-center text-tertiary-500 mb-3 text-2xl font-bold">
                Registreer met
              </h2>
              <Image
                src={"/images/gwap-logo-3.png"}
                alt="gwap logo"
                width={120}
                height={90}
              />
            </div>
          </Menu.Item>
        </SimpleGrid>
      </Menu.Dropdown>
    </Menu>
  );
};

export default LgRegisterButtonWithMenuComponent;
