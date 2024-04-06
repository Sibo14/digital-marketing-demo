"use client";
import { Button } from "@/components/ui/Button";
import { LampContainer } from "@/components/ui/lamp";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import animationData from "../images/lottifilesanimation.json";
import { Reveal } from "@/components/Reveal";

interface Package {
  name: string;
  description: string;
  img: string;
}
interface Testimonial {
  name: string;
  review: string;
}

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
  const aboutVariants = {
    hidden: { opacity: 0, y: 75 }, // Start from the top of the screen
    show: {
      type: "spring",
      stiffness: 30,
      damping: 10,
      opacity: 1,
      y: 0,
      delay: 8,
    },
  };

  const testiomonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("showsections");
    }
  }, [isInView, mainControls]);

  const ServicePack = ({ name, description, img }: Package) => (
    <motion.div
      className="flex flex-col h-full w-1/3 items-center justify-center bg-white rounded-lg shadow-md p-4"
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
          className="text-4xl font-bold gap-3 mt-4 "
        >
          {name}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
  return (
    <div ref={ref} className="bg-secondary ">
      <div>
        <div className="flex flex-row justify-evenly items-center h-screen ">
          <div className=" w-1/3 h-full flex flex-col justify-center items-center gap-4 ">
            <motion.div
              initial="hidden"
              animate="show"
              variants={headerVariants}
              // whileHover={{
              //   textShadow: "0px 0px 8px #FF7F11",
              // }}
              className="flex flex-col items-center gap-4 "
            >
              <h1 className="text-4xl font-bold text-white ">
                Digital Marketing
              </h1>
              <p className="gap-3 text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={quoteBtnVariants}
              className=" flex justify-center items-center "
              whileHover={{ scale: 1.1 }}
            >
              <Button size={"lg"} className="bg-primary rounded-full">
                Get Quote
              </Button>
            </motion.div>
            {/* <BackgroundBeams /> */}
          </div>

          <motion.div initial="hidden" animate="show" variants={lottieVariants}>
            <Lottie animationData={animationData} />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center items-center h-screen">
          <div>
            <LampContainer>
              <h1 className="text-4xl font-bold text-white">About US </h1>
              <div className="flex w-1/2 items-center p-3">
                <p className="text-white text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </LampContainer>
          </div>
        </div>
        <div className="h-screen ">
          <Reveal>
            <div className="flex  flex-col justify-center items-center">
              <h1 className="text-2xl font-bold text-white">Our Services</h1>
              <h2 className="text-4xl font-bold my-10 text-white">
                Choose your package
              </h2>
              <div className="flex justify-start items-center m-6 gap-3 h-full w-full p-4 overflow-hidden">
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
          </Reveal>
        </div>
        <div className="flex flex-col justify-evenly items-center h-screen overflow-hidden ">
          <Reveal>
            <h1 className="text-4xl font-bold text-white">Testimonials</h1>
          </Reveal>
          <Reveal>
            <div className="flex flex-col justify-center w-full h-full ">
              <div className="flex  items-center justify-center ">
                <InfiniteMovingCards
                  items={testiomonials}
                  direction="right"
                  speed="slow"
                />
              </div>
            </div>
          </Reveal>
        </div>
        <div className=" p-6 rounded-md shadow-md h-screen">
          <Reveal>
            <>
              <h2 className="text-2xl font-bold mb-5 text-center text-white">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div>
                  <input
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </>
          </Reveal>
        </div>
        <footer className="flex flex-col justify-center items-end p-4 text-white ">
          <Reveal>
            <>
              <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div>
                  <h1 className="font-bold text-2xl mb-2 ">Company Name</h1>
                  <p>1234 Street Name</p>
                  <p>City, State, Zip</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-2">Links</h2>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-2">Follow Us</h2>
                  <ul>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full flex justify-center my-4">
                <p>
                  &copy; {new Date().getFullYear()} Company Name. All rights
                  reserved.
                </p>
              </div>
            </>
          </Reveal>
        </footer>
      </div>
    </div>
  );
}
