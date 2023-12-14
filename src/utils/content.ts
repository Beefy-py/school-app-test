import {
  bulb,
  circleNumber1,
  circleNumber2,
  circleNumber3,
  circleNumber4,
  circleNumber5,
  circleNumber6,
  deviceTvOld,
  school,
} from "@/icons";

export const navbarComponent = {
  logo: "/images/logo.png",
  ctaText1: "In Loggen",
  ctaText2: "Registreren",
  links: [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "Diensten",
      path: "#features",
    },
    {
      name: "Tutorials",
      path: "#tutorials",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ],
};

export const heroComponent = {
  title:
    "Educatie en ontwikkeling zijn erg belangrijk voor een land als Suriname.",
  subTitle: `Om een bijdrage te leveren aan deze ontwikkelingen heeft de Molen
N.V met Bijles.sr de site gestart voor het Basisonderwijs. Bijles.sr is een
ondersteuning aan onze hardwerkende leerkrachten en ouders die
kinderen hebben die moeite hebben met bepaalde reken onderwerpen
of zich willen verbeteren.`,
  ctaText: "Bekijk de Tutorials",
  imageSlider: [
    { src: "/images/kid1.png", title: "Kid at school looking at a tablet" },
    {
      src: "/images/kids1.png",
      title: "Two Kids at school looking at a tablet",
    },
    {
      src: "/images/kids2.png",
      title: "Three Kids at school looking at a tablet",
    },
  ],
};

export const featuresComponent = {
  features: [
    {
      icon: (className: string) => bulb(className),
      title: "1x24 uur Lessen",
      description:
        "Lorem sed risus ultricies tristique nulla. Id cursus metus aliquam eleifend mi in nulla. Ipsum consequat nisl vel pretium lectus quam id leo in.",
    },
    {
      icon: (className: string) => deviceTvOld(className),
      title: "Video Uitleg",
      description:
        "Vivamus arcu felis bibendum ut tristique et egestas quis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Viverra maecenas accumsan lacus vel facilisis volutpat est.",
    },
    {
      icon: (className: string) => school(className),
      title: "Educatieve spelletjes ",
      description:
        "Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Suspendisse faucibus interdum posuere lorem ipsum. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.",
    },
  ],
};

export const tutorialsComponent = {
  tutorials: [
    {
      image: "/images/education.png",
      durationInHours: 7,
      icon: (className: string) => circleNumber1(className),
      title: "Leerjaar 3",
      description: "",
      reviews: "",
      rating: 3,
      totalLessons: 23,
      summary:
        "Sit amet nulla facilisi morbi tempus iaculis. Ac ut consequat semper viverra nam libero justo.",
    },
    {
      image: "/images/education.png",
      durationInHours: 10,
      icon: (className: string) => circleNumber2(className),
      title: "Leerjaar 4",
      description: "",
      reviews: "",
      rating: 4,
      totalLessons: 13,
      summary:
        "Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. ",
    },
    {
      image: "/images/education.png",
      durationInHours: 3,
      icon: (className: string) => circleNumber3(className),
      title: "Leerjaar 5",
      description: "",
      reviews: "",
      rating: 3,
      totalLessons: 35,
      summary: "Fames ac turpis egestas sed tempus urna et.",
    },
    {
      image: "/images/education.png",
      durationInHours: 8,
      icon: (className: string) => circleNumber4(className),
      title: "Leerjaar 6",
      description: "",
      reviews: "",
      rating: 4.5,
      totalLessons: 21,
      summary:
        "Lorem mollis aliquam ut porttitor. Eget nulla facilisi etiam dignissim diam quis enim.",
    },
    {
      image: "/images/education.png",
      durationInHours: 14,
      icon: (className: string) => circleNumber5(className),
      title: "Leerjaar 7",
      description: "",
      reviews: "",
      rating: 2.5,
      totalLessons: 50,
      summary:
        "Tellus in hac habitasse platea dictumst vestibulum rhoncus est.",
    },
    {
      image: "/images/education.png",
      durationInHours: 4,
      icon: (className: string) => circleNumber6(className),
      title: "Leerjaar 8",
      description: "",
      reviews: "",
      rating: 5,
      totalLessons: 42,
      summary:
        "Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.",
    },
  ],
};

export const footerComponent = {
  logo: navbarComponent.logo,
};

export const notFoundComponent = {
  title: "Title1",
  subTitle: "",
  links: [{ name: "Thuis", path: "/" }],
};
