"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../images/lottifilesanimation.json";

interface Package {
  name: string;
  description: string;
  img: string;
}

export default function HomePage() {
  const packages: Package[] = [
    {
      name: "SEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: require("../images/search.png"),
    },
    {
      name: "Social Media Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: require("../images/social.png"),
    },
    {
      name: "Web",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: require("../images/web.png"),
    },
    {
      name: "Mobile",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: require("../images/mobile.png"),
    },
  ];
  const headerVariants = {
    hidden: { y: "100vh" }, // Start from the bottom of the screen
    show: {
      y: 0, // End at the top of the screen
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
      },
    },
  };
  const quoteBtnVariants = {
    hidden: { y: "-100vh" }, // Start from the top of the screen
    show: {
      y: 0, // End at the top of the screen
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
        delay: 1,
      },
    },
  };
  const lottieVariants = {
    hidden: { y: "100vh" }, // Start from the top of the screen
    show: {
      y: 0, // End at the top of the screen
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
        delay: 2,
      },
    },
  };

  const ServicePack = ({ name, description, img }: Package) => (
    <motion.div
      className="flex flex-col h-full w-1/3 items-center justify-center "
      whileHover={{ scale: 1.1, cursor: "pointer" }}
    >
      <div className="flex-1 flex items-center justify-center rounded-full overflow-hidden">
        <Image src={img} alt="/" objectFit="cover" />
      </div>
      <motion.div className="flex-1 flex items-center justify-center">
        <motion.h1
          whileHover={{
            color: "#FF7F11",
          }}
          className="text-4xl font-bold gap-3 mt-4"
        >
          {name}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
  return (
    <div>
      <div
        className="flex flex-row justify-evenly items-center h-screen bg-secondary"
        style={
          {
            // backgroundImage: `url('https://images.hdqwalls.com/download/neon-city-buildings-4k-on-2048x1152.jpg')`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
          }
        }
      >
        <div>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={headerVariants}
            className="text-4xl font-bold text-white"
            whileHover={{
              textShadow: "0px 0px 8px #FF7F11",
            }}
          >
            Digital Marketing
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="show"
            variants={quoteBtnVariants}
            className="m-3 flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            <Button size={"lg"} className="bg-primary">
              Get Quote
            </Button>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="show" variants={lottieVariants}>
          <Lottie animationData={animationData} />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className="text-2xl font-bold">Our Services</h1>
        <h2 className="text-4xl font-bold my-10">Choose your package</h2>
        <div className="flex justify-start items-center m-6 gap-3 h-full w-full p-4">
          {/* <h1 className="text-4xl font-bold">SEO </h1>
          <h1 className="text-4xl font-bold">Social Media Marketing</h1>
          <h1 className="text-4xl font-bold">Web Design</h1>
          <h1 className="text-4xl font-bold">Mobile Design </h1> */}

          {packages.map((item, index) => (
            <ServicePack
              name={item.name}
              description={item.description}
              img={item.img}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-secondary">
        <div className="flex h-full w-full  items-center justify-end p-3">
          <h1 className="text-4xl font-bold">About</h1>
        </div>
        <div className="flex w-full  p-3">
          <p className="justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen ">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        {/* Add your content for the Testimonials section here */}
      </div>
      <footer className="flex justify-center items-center h-screen bg-secondary ">
        <h1 className="text-4xl font-bold">Footer</h1>
        {/* Add your content for the Footer section here */}
      </footer>
    </div>
  );
}
