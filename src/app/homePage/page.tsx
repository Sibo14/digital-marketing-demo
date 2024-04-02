"use client";
import { Button } from "@/components/ui/Button";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../images/lottifilesanimation.json";
import aboutLottie from "../images/lottifilesAbout.json";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { Card, CardContent } from "@/components/ui/card";
import profilepic from "../images/profilepic.jpg";

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
  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "John Doe",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      delay: 5.5,
    },
  };

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);

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
        <div className="flex justify-start items-center m-6 gap-3 h-full w-full p-4 overflow-hidden">
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
      <div className="flex flex-col justify-center items-center h-screen bg-secondary">
        <h1 className="text-4xl font-bold text-white">About US </h1>
        <div className="flex items-center h-full">
          <motion.div
            className="flex flex-col h-full w-full  items-center justify-center p-3 "
            initial="hidden"
            animate={mainControls}
            variants={aboutVariants}
            ref={ref}
          >
            <Lottie animationData={aboutLottie} className="h-96" />
          </motion.div>
          <motion.div
            className="flex w-full  p-3"
            initial="hidden"
            animate={mainControls}
            variants={aboutVariants}
            ref={ref}
          >
            <p className="justify-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="flex h-full items-center justify-center w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-4xl "
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <div className="p-1">
                    <Card className=" bg-white rounded-lg shadow-md overflow-hidden h-96 w-60 ">
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-4 ">
                        <Image
                          src={profilepic}
                          alt="/"
                          objectFit="cover"
                          width={100}
                          height={100}
                          className="rounded-full"
                        />

                        <h1 className="text-xl font-bold">{item.name}</h1>
                        <p className="text-base text-gray-600">{item.review}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <footer className="flex flex-col justify-center items-end p-4 bg-secondary text-white ">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl mb-2">Company Name</h1>
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
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
