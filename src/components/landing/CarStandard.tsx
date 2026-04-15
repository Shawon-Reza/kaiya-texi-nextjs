"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { PiAirplaneTilt, PiHeadset } from "react-icons/pi";
import { TbSparkles } from "react-icons/tb";
import { BiCar } from "react-icons/bi";
import car from "../../public/images/car.png";
import { Highlighter } from "../ui/highlighter";


const FEATURES_DATA = [
  {
    id: 1,
    title: "Local driver expertise",
    description: "Drivers with extensive knowledge of local routes and areas.",
    icon: BiCar,
  },
  {
    id: 2,
    title: "Transparent Pricing",
    description:
      "No hidden fees, surge pricing, or surprise tolls. The price you see is what you pay.",
    icon: AiOutlineSearch, // similar to magnifying glass with $
  },
  {
    id: 3,
    title: "Flight Monitoring",
    description:
      "We track your flight in real-time and adjust pickup times for any delays automatically.",
    icon: PiAirplaneTilt,
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Our dedicated team is available around the clock to assist you with any inquiries or issues.",
    icon: PiHeadset,
  },
  {
    id: 5,
    title: "Clean and comfortable vehicles",
    description:
      "We maintain our fleet to the highest standards of cleanliness and safety for your peace of mind.",
    icon: TbSparkles,
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Rotate items every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev - 1 + FEATURES_DATA.length) % FEATURES_DATA.length);
    }, 3000); // 3 seconds per user request
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen  text-slate-900 py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="mx-auto ">
        {/* Header Section */}
        <header className="text-center mb-10 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Why Travelers Trust Kiaya
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            The
            {" "} <Highlighter action="highlight" color="#FF9800" isView>
              Kiaya
            </Highlighter>{" "}
            Standard
          </h2>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative">

          {/* Left Column - Image & Text */}
          <div className="relative flex flex-col justify-center order-1 lg:order-none">
            {/* The Car Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 lg:mb-8 z-10 flex items-center justify-center bg-transparent">
              <img
                src="/images/car.png"
                alt="Kiaya Taxi Professional Service"
                className="object-contain scale-90 lg:scale-75 hover:scale-100 lg:hover:scale-80 w-full h-full rounded-2xl transition-transform duration-700"
              />
            </div>

            <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl text-gray-500 leading-snug font-medium pr-0 lg:pr-8 text-center lg:text-left">
              Whether you're heading out for business, leisure, or a special event,{" "}
              <span className="text-gray-900 font-bold block mt-2 lg:inline lg:mt-0">Kiaya Taxi guarantees</span> you arrive in style, comfort, and right on schedule.
            </p>
          </div>

          {/* Right Column - Rotating Cards */}
          <div className="relative lg:absolute lg:left-10 lg:-right-[170px] xl:-right-[250px] 2xl:-right-[350px] h-[500px] lg:h-[600px] flex flex-col justify-center px-2 md:px-4 lg:px-0 order-2 lg:order-none mt-8 lg:mt-0 z-20">
            {/* We render all 5 cards in a stack. The 3rd (index 2) will be highlighted. */}
            <div className="relative w-full max-w-md md:max-w-xl lg:max-w-lg mx-auto lg:ml-auto">
              <div className="relative w-full h-[450px] lg:h-[560px]" style={{ perspective: "1200px" }}>
                {FEATURES_DATA.map((card, index) => {
                  let diff = index - activeIndex;
                  if (diff > 2) diff -= 5;
                  if (diff < -2) diff += 5;

                  const isMiddle = diff === 0;

                  // Create the arc effect. Center pushes RIGHT (bulges out to the right)
                  // Scale values down for mobile to prevent overflow
                  const yOffsetMultiplier = isMobile ? 100 : 145;
                  const xOffsetMultiplier = isMobile ? 0 : 150;
                  
                  const yOffset = diff * yOffsetMultiplier;  
                  const xOffset = (2 - Math.abs(diff)) * xOffsetMultiplier; 
                  
                  const scale = isMobile 
                    ? 1 - Math.abs(diff) * 0.1 
                    : 1 - Math.abs(diff) * 0.05;
                    
                  const rotateX = diff * (isMobile ? 10 : 20); // Subtle 3D rotation effect

                  const opacity = 1 - Math.abs(diff) * 0.35;
                  const zIndex = 10 - Math.abs(diff);

                  return (
                    <motion.div
                      key={card.id}
                      animate={{
                        y: `calc(-50% + ${yOffset}px)`,
                        x: xOffset,
                        scale,
                        opacity,
                        zIndex,
                        rotateX,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1], // Smooth easeOut custom cubic-bezier
                      }}
                      className={`absolute top-1/2 left-0 right-0 p-4 lg:p-6 rounded-2xl lg:rounded-3xl flex items-start space-x-3 lg:space-x-5 transition-colors duration-500 origin-center scale-100 sm:scale-100 md:scale-80  xl:scale-90  2xl:scale-100 ${isMiddle
                        ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-[#1a2332]"
                        : "bg-gray-50 shadow-sm border border-transparent"
                        }`}
                    >
                      <div
                        className={`p-2 lg:p-3 rounded-full flex-shrink-0 transition-colors duration-500 ${isMiddle ? "bg-gray-100 text-[#1a2332]" : "bg-gray-200/50 text-gray-500"
                          }`}
                      >
                        <card.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-base lg:text-lg font-bold mb-1 transition-colors duration-500 ${isMiddle ? "text-[#1a2332]" : "text-gray-500"
                            }`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`text-xs lg:text-sm leading-relaxed transition-colors duration-500 ${isMiddle ? "text-gray-600" : "text-gray-400"
                            }`}
                        >
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
