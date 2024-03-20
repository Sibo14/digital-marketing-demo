import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import HomePage from "./homePage/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}
