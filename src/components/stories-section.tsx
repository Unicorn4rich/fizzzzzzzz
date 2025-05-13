"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the story card data
const storyCards = [
  {
    id: 1,
    title: "Flower Decorations",
    author: "Melena Spring",
    image: "/div1.png",
    avatar: "/user1.png",
  },
  {
    id: 2,
    title: "Flower Decorations",
    author: "Melena Spring",
    image: "/div2.png",
    avatar: "/user2.png",
  },
  {
    id: 3,
    title: "Splash",
    author: "Brenda Müller",
    image: "/div3.png",
    avatar: "/user3.png",
  },
  {
    id: 4,
    title: "Colorful Face",
    author: "Melena Spring",
    image: "/div4.png",
    avatar: "/user4.png",
  },
  {
    id: 5,
    title: "Abstract Art",
    author: "Brenda Müller",
    image: "/div1.png",
    avatar: "/user1.png",
  },
  {
    id: 6,
    title: "Digital Dreams",
    author: "Melena Spring",
    image: "/div3.png",
    avatar: "/user3.png",
  },
]

// Duplicate the cards to create the illusion of infinite scrolling
const duplicatedCards = [...storyCards, ...storyCards]

export default function StoriesSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = 280
      const currentScroll = carouselRef.current.scrollLeft

      // If we're near the beginning, jump to the duplicate section without animation
      if (currentScroll < 100) {
        // Jump to the duplicate section (middle of the full list)
        carouselRef.current.scrollLeft = currentScroll + storyCards.length * 280

        // Then after a tiny delay, smoothly scroll to create the illusion of continuity
        setTimeout(() => {
          carouselRef.current!.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        }, 10)
      } else {
        // Normal scroll
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      }
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = 280
      const currentScroll = carouselRef.current.scrollLeft
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth

      // If we're near the end, jump to the beginning without animation
      if (maxScroll - currentScroll < 100) {
        // Jump to the beginning
        carouselRef.current.scrollLeft = currentScroll - storyCards.length * 280

        // Then after a tiny delay, smoothly scroll to create the illusion of continuity
        setTimeout(() => {
          carouselRef.current!.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }, 10)
      } else {
        // Normal scroll
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="w-full flex justify-center items-center px-[15px] sm:px-[30px] md:px-[50px] lg:px-[80px] py-6 sm:py-12 md:py-16 lg:py-24">
      <div className="w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-[300px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold bg-gradient-to-r from-[#C026D3] via-[#A420A8] to-[#701A75] bg-clip-text text-transparent mb-[10px] sm:mb-[12px] md:mb-[14px]">
            Stories from our users
          </h2>
          <p className="text-gray-600 mb-[-20px] sm:mb-[-10px] md:mb-0 lg:mb-8 text-[12px] sm:text-[13px] md:text-[14px] px-2 sm:px-4">
            Et pulvinar nec interdum integer ut urna molestie porta nullam. A, donec orci sed turpis pulvinar purus
            maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="w-[260px] sm:w-[450px] md:w-full flex justify-center relative mx-auto">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-[-20px] lg:left-[30px] xl:left-[90px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md text-gray-700 hover:text-purple-600 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[78%] flex justify-start sm:justify-center overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {duplicatedCards.map((card, index) => (
              <motion.div
                key={`${card.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[260px] sm:w-[200px] md:w-[220px] snap-center px-[10px] sm:px-1.5 md:px-2 lg:px-3"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-[130px] sm:h-[145px] md:h-[160px] overflow-hidden">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      width={220}
                      height={160}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-2 sm:p-2.5 md:p-3 flex items-center gap-1.5 sm:gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full overflow-hidden">
                      <Image
                        src={card.avatar || "/placeholder.svg"}
                        alt={card.author}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-[10px] sm:text-[11px] md:text-xs">
                      <p className="font-semibold">{card.title}</p>
                      <p className="text-gray-500">by {card.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-[-20px] lg:right-[30px] xl:right-[90px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md text-gray-700 hover:text-purple-600 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
