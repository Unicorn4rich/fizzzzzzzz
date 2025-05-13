"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-[80px] py-[20px] sm:py-[30px] md:py-[40px] lg:py-20 overflow-hidden">
      <div className="mx-auto">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[20px] sm:text-[32px] md:text-[44px] lg:text-[56px] font-bold bg-gradient-to-r from-[#C026D3] via-[#A420A8] to-[#701A75] bg-clip-text text-transparent mb-[10px] sm:mb-3 md:mb-4">
            Get better everyday
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-7 md:mb-8 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] px-2 sm:px-4 md:px-6">
            Et pulvinar nec interdum integer ut urna molestie porta nullam. A, donec orci sed turpis pulvinar purus
            maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
          </p>
          <Button className="bg-[#C026D3] hover:bg-[#985aa0] text-white rounded-full px-5 sm:px-6 md:px-7 lg:px-8 py-2 text-[14px] sm:text-[15px] md:text-[16px] h-[40px] sm:h-[44px] md:h-[47px]">
            {/* Different text for mobile vs desktop */}
            <span className="md:hidden">Button Text</span>
            <span className="hidden md:inline">Start Now</span>
          </Button>
        </motion.div>

        {/* Mockups Container - Desktop Layout */}
        <div className="relative mt-4 md:mt-0 hidden md:flex">
          {/* Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-[40%] md:w-[60%] lg:w-[70%] h-[400px] md:h-[500px] lg:h-[600px] left-0 right-0 md:left-[5%] lg:left-[10%] md:right-[25%] top-[30%] md:top-0 z-10 border-2 rounded-[20px]"
          >
            <Image src="/mainF.png" fill className="object-cover rounded-[20px]" alt="Browser Mockup" priority />
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative w-[250px] md:w-[300px] lg:w-[350px] right-0 md:right-[45px] h-[450px] md:h-[550px] lg:h-[650px] border-1 z-20 top-[40px] md:top-[50px] lg:top-[60px] rounded-[20px]"
          >
            <Image src="/verticle.png" fill className="object-cover rounded-[20px]" alt="Mobile Mockup" priority />
          </motion.div>

          <div className="flex flex-col">
            {/* Splash Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute left-4 md:left-[3%] lg:left-[5%] top-0 md:top-[55%] lg:top-[65%] w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] z-30 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_rgba(0,0,0,1)]"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-2 flex items-center gap-2">
                  <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-full overflow-hidden">
                    <Image src="/supli.png" alt="Brenda Müller" width={32} height={32} className="object-cover" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] md:text-xs">
                    <p className="font-semibold">Splash</p>
                    <p className="text-gray-500">by Brenda Müller</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Colorful Face Card with Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute left-0 md:left-[1%] lg:left-[2%] top-[35%] md:top-[65%] lg:top-[75%] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] z-40 shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[120px] overflow-hidden">
                  <Image
                    src="/trans.png"
                    alt="Colorful Face"
                    width={220}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-2 flex items-center gap-2">
                  <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-full overflow-hidden">
                    <Image src="/hatti.png" alt="Melena Spring" width={32} height={32} className="object-cover" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] md:text-xs">
                    <p className="font-semibold">Colorful Face</p>
                    <p className="text-gray-500">by Melena Spring</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - Only shown on mobile */}
        <div className="md:hidden relative mt-8">
          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto w-[240px] sm:w-[280px] h-[420px] sm:h-[500px] z-10 rounded-[20px] border-2 border-gray-200"
          >
            <Image src="/verticle.png" fill className="object-cover rounded-[20px]" alt="Mobile Mockup" priority />
          </motion.div>

          {/* Splash Card - Mobile Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute left-0 top-[150px] sm:top-[180px] w-[130px] sm:w-[150px] z-30 shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)]"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-2 flex items-center gap-2">
                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full overflow-hidden">
                  <Image src="/supli.png" alt="Brenda Müller" width={32} height={32} className="object-cover" />
                </div>
                <div className="text-[10px] sm:text-xs">
                  <p className="font-semibold">Splash</p>
                  <p className="text-gray-500">by Brenda Müller</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colorful Face Card - Mobile Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-0 top-[220px] sm:top-[250px] w-[150px] sm:w-[180px] z-40 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-[80px] sm:h-[100px] overflow-hidden">
                <Image
                  src="/trans.png"
                  alt="Colorful Face"
                  width={220}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-2 flex items-center gap-2">
                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full overflow-hidden">
                  <Image src="/hatti.png" alt="Melena Spring" width={32} height={32} className="object-cover" />
                </div>
                <div className="text-[10px] sm:text-xs">
                  <p className="font-semibold">Colorful Face</p>
                  <p className="text-gray-500">by Melena Spring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
