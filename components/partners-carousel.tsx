"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"

type PartnerItem = {
  id: string
  label: string
  shortLabel?: string
  subLabel?: string
  description?: string
  regNumber?: string
  link?: string
  /** Set to a path (e.g. "/logos/mia.png") to show an image instead of text */
  image?: string
}

const partners: PartnerItem[] = [

  {
    id: "365-migrationhub",
    label: "365 Migration Hub",
    shortLabel: "365 Migration Hub",
    subLabel: "SERVICES",
    image: "/images/logo.jpg",
  },
  {
    id: "mia",
    label: "Migration Institute of Australia",
    shortLabel: "MIA",
    description: "Migration Institute of Australia",
    image: "/images/mia.jpg",
  },
  {
    id: "mara",
    label: "Migration Agents",
    subLabel: "Registration Number",
    regNumber: "2619180",
    link: "www.mara.gov.au",
    // image: "/logos/mara.png",
  },
  {
    id: "365-migrationhub",
    label: "365 Migration Hub",
    shortLabel: "365 Migration Hub",
    subLabel: "SERVICES",
    image: "/images/logo.jpg",
  },
  {
    id: "mia",
    label: "Migration Institute of Australia",
    shortLabel: "MIA",
    description: "Migration Institute of Australia",
    image: "/images/mia.jpg",
  },
  {
    id: "mara",
    label: "Migration Agents",
    subLabel: "Registration Number",
    regNumber: "2619180",
    link: "www.mara.gov.au",
    // image: "/logos/mara.png",
  },
  {
    id: "365-migrationhub",
    label: "365 Migration Hub",
    shortLabel: "365 Migration Hub",
    subLabel: "SERVICES",
    image: "/images/logo.jpg",
  },
  {
    id: "mia",
    label: "Migration Institute of Australia",
    shortLabel: "MIA",
    description: "Migration Institute of Australia",
    image: "/images/mia.jpg",
  },
  {
    id: "mara",
    label: "Migration Agents",
    subLabel: "Registration Number",
    regNumber: "2619180",
    link: "www.mara.gov.au",
    // image: "/logos/mara.png",
  },

]

export function PartnersCarousel() {
  const [api, setApi] = React.useState<ReturnType<typeof import("embla-carousel-react").default>[1] | null>(null)

  const autoplayPlugin = React.useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    []
  )

  React.useEffect(() => {
    if (!api) return
    const autoplay = (api as unknown as { plugins: () => { autoplay?: { play: () => void } } }).plugins?.()?.autoplay
    autoplay?.play()
  }, [api])

  return (
    <section className="py-16 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-500 dark:text-gray-400 mb-8">
          Our Partners & Accreditations
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
          }}
          plugins={[autoplayPlugin]}
          setApi={setApi}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner) => {
              const isMara = partner.id === "mara"
              return (
                <CarouselItem
                  key={partner.id}
                  className={cn(
                    "pl-2 md:pl-4",
                    isMara ? "basis-[200px] md:basis-[240px]" : "basis-[160px] md:basis-[200px]"
                  )}
                >
                  <div
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 h-28 md:h-32 px-4 text-center overflow-hidden",
                      isMara && "py-3"
                    )}
                  >
                    {partner.image ? (
                      <div className="relative w-full h-full min-h-[80px]">
                        <Image
                          src={partner.image}
                          alt={partner.label}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 160px, 200px"
                        />
                      </div>
                    ) : isMara ? (
                      <>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {partner.label}
                        </span>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase mt-0.5">
                          {partner.subLabel}
                        </span>
                        <span className="text-lg font-bold text-gray-700 dark:text-gray-300 mt-1">
                          {partner.regNumber}
                        </span>
                        <a
                          href="https://www.mara.gov.au"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-brand-blue dark:text-teal-400 mt-1 hover:underline"
                        >
                          {partner.link}
                        </a>
                      </>
                    ) : (
                      <>
                        <span
                          className={cn(
                            "font-semibold text-gray-700 dark:text-gray-300",
                            partner.shortLabel ? "text-sm md:text-base" : "text-sm"
                          )}
                        >
                          {partner.shortLabel ?? partner.label}
                        </span>
                        {partner.subLabel && (
                          <span className="text-[10px] uppercase text-gray-500 dark:text-gray-400 mt-0.5">
                            {partner.subLabel}
                          </span>
                        )}
                        {partner.description && !partner.shortLabel && (
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                            {partner.description}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-2 md:-left-8 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700" />
          <CarouselNext className="-right-2 md:-right-8 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700" />
        </Carousel>
      </div>
    </section>
  )
}
