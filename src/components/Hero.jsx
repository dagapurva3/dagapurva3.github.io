'use client'
import { motion } from "framer-motion";
import { styles } from "../styles"
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import heroImg from "../assets/user.svg"
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { heroTexts } from "../constants/constants";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    if (firstText.current) { gsap.set(firstText.current, { xPercent: xPercent }) }
    if (secondText.current) { gsap.set(secondText.current, { xPercent: xPercent }) }


    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <section className={`relative z-[-1] w-full h-screen mx-auto banner overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[150px] right-40 z-[-1] animation  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div data-scroll data-scroll-speed='0.4'>
          <h1 className={`font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 text-white`}>
            Hi, I'm <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[80px] lg:text-[110px] whitespace-nowrap leading-none"
              style={{ fontFamily: '"Ibarra Real Nova", serif', lineHeight: '1.2' }}>
              Purva Daga
            </p>
          </h1>
          <p className={`heroSubText mt-2 text-xl sm:text-2xl font-light tracking-wide text-lime-100`}>
            <TypeAnimation
              sequence={heroTexts}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>
          <p className={`mt-2 text-xl sm:text-2xl font-bold text-purple-400`} style={{ fontFamily: '"Ibarra Real Nova", serif' }}>
            A developer passionate about designing scalable systems,
            <br />
            conquering challenges, and staying fit both in code and life! 💻🏋️‍♂️ <br className='sm:block hidden' />
          </p>

        </div>
      </div>
      {/* <div className="sliderContainer md:z-[-10]">
        <div ref={slider} className="slider overflow-hidden text-secondary text-[70px] lg:text-[200px]">
          <p ref={firstText} >Full-Stack Developer.</p>
          <p ref={secondText}>Full-Stack Developer.</p>
        </div>
      </div> */}


      <Image loading="lazy" src={heroImg} alt="hero" className="z-[-2] absolute bottom-24 right-0 animation object-cover" />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30 cursor-pointer'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
