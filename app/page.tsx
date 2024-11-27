import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Passion from "@/components/Passion";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Passion />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
