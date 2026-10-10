import { About, Contact, Hero, Navbar, Tech, Works, Experience } from "@/components";
import StarsBackground from "@/components/StarsBackground";

export default function Home() {
  return (
    <div className="  ">
      <Navbar />
      <Hero />
      <div className="bg-primary relative z-[1] h-full ">
        <div className=" relative z-[1]">
          <About />
          <div className=" overflow-hidden">
            <Experience />
            <Tech />
          </div>
          <Works />
          <Contact />
        </div>
        <StarsBackground />
      </div>
    </div>
  );
}
