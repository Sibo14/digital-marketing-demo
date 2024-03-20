"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  const header = {
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
  const getQoute = {
    hidden: { y: "-100vh" }, // Start from the top of the screen
    show: {
      y: 0, // End at the top of the screen
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
      },
    },
  };
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center h-screen"
        style={{
          backgroundImage: `url('https://images.hdqwalls.com/download/neon-city-buildings-4k-on-2048x1152.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div initial="hidden" animate="show" variants={header}>
          <h1 className="text-4xl font-bold text-white">Digital Marketing</h1>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={getQoute}>
          <Button size={"lg"} className="bg-primary">
            Get Quote
          </Button>
        </motion.div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex h-full w-full  items-center justify-end p-3">
          <h1 className="text-4xl font-bold">About</h1>
        </div>
        <div className="flex w-full  p-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Pricing</h1>
        {/* Add your content for the Pricing section here */}
      </div>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        {/* Add your content for the Testimonials section here */}
      </div>
      <footer className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Footer</h1>
        {/* Add your content for the Footer section here */}
      </footer>
    </div>
  );
}
