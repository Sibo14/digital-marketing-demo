"use client";
import { Reveal } from "@/components/Reveal";
import { LampContainer } from "@/components/ui/lamp";
import { motion, useAnimation, useInView } from "framer-motion";
import Lottie from "lottie-react";
import {
  Globe,
  MessageCircleMore,
  Search,
  Smartphone,
  CheckCheckIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import animationData from "../images/lottifilesanimation.json";

interface Package {
  name: string;
  description: string;
  img: any;
}

interface Pricing {
  name: string;
  price: number;
  frequency?: string;
  features: string[];
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: <Search className="text-primary" />,
    },
    {
      name: "Social Media Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: <MessageCircleMore className="text-primary" />,
    },
    {
      name: "Web",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: <Globe className="text-primary" />,
    },
    {
      name: "Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: <Smartphone className="text-primary" />,
    },
  ];

  const pricing: Pricing[] = [
    {
      name: "Package 1",
      price: 100,
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      name: "Package 2",
      price: 150,
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      name: "Package 3",
      price: 250,
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      name: "Package 4",
      price: 400,
      features: ["feature 1", "feature 2", "feature 3"],
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
    <div className="flex flex-col justify-evenly max-w-sm items-center p-4 border mx-3 bg-white rounded-2xl h-72 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg shadow hover:cursor-pointer my-3">
      <div>{img}</div>
      <div className="mt-4 text-xl font-bold">
        <h1>{name}</h1>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        <h1>{description}</h1>
      </div>
    </div>
  );

  const PricingPlan = ({
    name,
    price,
    frequency = "month",
    features,
  }: Pricing) => (
    <div className="h-full flex justify-center items-center px-6 py-2 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg shadow">
      <div className="bg-white border border-indigo-600 border-opacity-10 rounded-md shadow-xl cursor-pointer">
        <div className="px-6 py-12 border-b-2 border-gray-200">
          <p className="text-3xl font-semibold text-center">{name}</p>
          <div className="flex justify-center items-center">
            <div className="flex items-start">
              <p className="text-4xl font-medium">R</p>
              <p className="text-7xl font-bold">{price}</p>
            </div>
            <p className="text-2xl text-gray-400">/{frequency}</p>
          </div>
        </div>
        <div className="p-12 bg-gray-100">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li className="flex items-center space-x-4" key={index}>
                <CheckCheckIcon className="w-6 h-6 text-green-500" />
                <p className="text-lg text-gray-600">{feature}</p>
              </li>
            ))}
          </ul>
          <Button
            size={"lg"}
            className="mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all"
          >
            Select Plan
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <div ref={ref}>
      <div>
        <div className="flex flex-col md:flex-row justify-evenly items-center h-screen ">
          <div className="w-full md:w-1/3 h-full flex flex-col justify-center items-center gap-4 ">
            <motion.div
              initial="hidden"
              animate="show"
              variants={headerVariants}
              className="flex flex-col items-center gap-4 "
            >
              <h1 className="text-2xl font-bold text-white text-center md:text-4xl  md:block hidden">
                Digital Marketing
              </h1>
              <p className="text-white text-lg md:text-2xl text-justify p-4 ">
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

          <motion.div
            initial="hidden"
            animate="show"
            variants={lottieVariants}
            className="w-full sm:w-auto"
          >
            <Lottie animationData={animationData} />
          </motion.div>
        </div>
        <div
          className="flex flex-col justify-center items-center h-screen "
          id="about"
        >
          <div>
            <LampContainer>
              <h1 className="text-2xl font-bold text-white md:text-4xl">
                About Us{" "}
              </h1>
              <div className="flex w-full items-center p-3 md:w-1/2">
                <p className="text-white text-sm md:text-xl">
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
        <div
          className="flex flex-col  items-center h-200 justify-center md:h-screen"
          id="services"
        >
          <Reveal>
            <div className="flex flex-col justify-center items-center w-full h-full  ">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Our Services
              </h1>
              <div
                className="flex-1 md:flex flex-col md:flex-row justify-start items-center gap-3 md:w-full py-2 px-2 md:px-0  "
                style={{ height: 600 }}
              >
                {packages.map((item, index) => (
                  <ServicePack {...item} key={index} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div
          className="flex flex-col justify-evenly items-center md:h-screen  h-200 "
          id="pricing"
        >
          <Reveal width="100%">
            <div className="flex flex-col justify-center items-center lg:w-full gap-3 ">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Pricing
              </h1>
              <div className="grid lg:grid-cols-4 lg:gap-0">
                {pricing.map((item, index) => (
                  <div className="w-full max-w-md mx-auto" key={index}>
                    <PricingPlan key={index} {...item} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div
          className="flex flex-col justify-evenly items-center h-screen overflow-hidden "
          id="testimonials"
        >
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Testimonials
            </h1>
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
        <div
          className="flex justify-center p-6 rounded-md shadow-md h-screen w-full"
          id="contact"
        >
          <div className="flex flex-col w-full md:w-1/2 justify-evenly">
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
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="note"
                >
                  Note:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="note"
                  name="note"
                  required
                />
              </div>
              <div>
                <input
                  className="bg-primary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <footer className="flex flex-col justify-center items-end p-4 text-white ">
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
        </footer>
      </div>
    </div>
  );
}
