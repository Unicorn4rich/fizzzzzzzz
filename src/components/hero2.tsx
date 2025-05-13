"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DesignsSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-[80px] py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-7 md:gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              New designs
              <br />
              New inspirations
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu
              eget. Et integer facilisi eget diam.
            </p>
            <Button
              variant="default"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 sm:px-7 md:px-8 py-2 text-sm sm:text-base"
            >
              Explore
            </Button>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-6 md:mt-0"
          >
            {/* First Image - Circle/Spiral */}
            <div className="relative w-[180px] h-[180px] sm:w-[190px] sm:h-[190px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden">
              <Image src="/gol.png" alt="Spiral design" fill className="object-cover" />
            </div>

            {/* Second Image - Arches */}
            <div className="relative w-[240px] h-[240px] sm:w-[250px] sm:h-[250px] md:w-[260px] md:h-[260px] lg:w-[270px] lg:h-[270px] rounded-lg">
              <Image src="/chakor.png" alt="Arches design" fill className="object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-gray-500 rounded-full"></div>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Title 1</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-gray-500 rounded-full"></div>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Title 2</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-gray-500 rounded-full"></div>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Title 3</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
