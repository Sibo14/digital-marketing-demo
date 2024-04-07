import Navbar from "../components/Navbar";
import HomePage from "./homePage/page";

export default function Home() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <HomePage />
    </div>
  );
}
