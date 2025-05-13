"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [name, setName] = useState("")

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[80px] py-6 sm:py-8 md:py-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
      >
        <h1 className="text-[25px] sm:text-[40px] md:text-[55px] lg:text-[65px] font-bold bg-gradient-to-r from-[#C026D3] via-[#A420A8] to-[#701A75] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
          It&apos;s time to take a break
        </h1>
        <p className="text-[#475569] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] mb-4 sm:mb-6 md:mb-8 text-center mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          Build your meditation skills with an app that gives you all you need!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center mb-6 sm:mb-8">
          <Input
            type="text"
            placeholder="Enter your name"
            className="rounded-full px-4 sm:px-5 md:px-6 py-2 w-full sm:w-[280px] md:w-[350px] lg:w-[466px] h-[45px] text-[14px] md:text-[16px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            className="bg-[#C026D3] hover:bg-[#985aa0] text-white rounded-full px-[20px] sm:px-6 md:px-8 py-2 text-[14px] md:text-[16px] h-[45px] md:h-[47px] w-full sm:w-auto mt-2 sm:mt-0"
            onClick={() => console.log("Start Now clicked with name:", name)}
          >
            Start Now
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-7xl mx-auto mt-4 sm:mt-8 md:mt-[20px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-md sm:shadow-lg"
      >
        <Image
          src="/heroSec.png"
          alt="People collaborating"
          width={1300}
          height={600}
          className="w-full h-[160px] sm:h-[240px] md:h-[320px] lg:h-auto object-cover"
        />
      </motion.div>
    </section>
  )
}
