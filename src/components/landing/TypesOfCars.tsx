"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowUpRight, Briefcase, Users } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"

type CarType = {
    id: number
    category: "sedan" | "suv" | "minivan" | "van"
    title: string
    description: string
    seats: string
    luggage: string
    image: string
}

const carTypes: CarType[] = [
    {
        id: 1,
        category: "sedan",
        title: "First class Sedan",
        description: "Mercedes S-Class, BMW 7 series, Audi 8, or similar",
        seats: "2-3",
        luggage: "2 Large",
        image: "/images/service.png",
    },
    {
        id: 2,
        category: "minivan",
        title: "First class Sedan",
        description: "Mercedes S-Class, BMW 7 series, Audi 8, or similar",
        seats: "2-3",
        luggage: "2 Large",
        image: "/images/hero.jpg",
    },
    {
        id: 3,
        category: "suv",
        title: "First class Sedan",
        description: "Mercedes S-Class, BMW 7 series, Audi 8, or similar",
        seats: "2-3",
        luggage: "2 Large",
        image: "/images/service.png",
    },
    {
        id: 4,
        category: "van",
        title: "Business Van",
        description: "Mercedes V-Class, Toyota Hiace, Ford Transit, or similar",
        seats: "5-7",
        luggage: "6 Large",
        image: "/images/hero.jpg",
    },
    {
        id: 5,
        category: "suv",
        title: "Luxury SUV",
        description: "Range Rover, Cadillac Escalade, BMW X7, or similar",
        seats: "3-4",
        luggage: "4 Large",
        image: "/images/service.png",
    },
    {
        id: 6,
        category: "minivan",
        title: "Family Minivan",
        description: "Honda Odyssey, Toyota Sienna, Kia Carnival, or similar",
        seats: "6-7",
        luggage: "5 Large",
        image: "/images/hero.jpg",
    },
]

const categories = [
    { label: "All", value: "all" },
    { label: "Sedan", value: "sedan" },
    { label: "Sub", value: "suv" },
    { label: "Mini Van", value: "minivan" },
    { label: "Van", value: "van" },
] as const

type CategoryValue = (typeof categories)[number]["value"]

function CarCard({ car }: { car: CarType }) {
    return (
        <article className="group overflow-hidden  transition-all duration-300 hover:-translate-y-1 ">
            <div className="relative aspect-[2.0] overflow-hidden  bg-zinc-800">
                <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl "
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={car.id <= 3}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent rounded-2xl " />
            </div>

            <div className="px-1 pt-4 pb-2 text-white bg-none" >
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                            {car.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-white/65">
                            {car.description}
                        </p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-zinc-950">
                        <ArrowUpRight className="h-4 w-4" />
                    </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-medium text-white/85">
                    <span className="inline-flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {car.seats}
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {car.luggage}
                    </span>
                </div>
            </div>
        </article>
    )
}

const TypesOfCars = () => {
    const [activeCategory, setActiveCategory] = React.useState<CategoryValue>("all")

    const visibleCars =
        activeCategory === "all"
            ? carTypes
            : carTypes.filter((car) => car.category === activeCategory)

    return (
        <section className="bg-[#2b2a2a] py-6 text-white sm:py-10 lg:py-14">
            <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3x text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                        Our Fleet
                    </p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
                        Curated vehicles for every<br></br> alpine journey
                    </h2>
                </div>

                <div className="mt-10 flex flex-col gap-6 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                        {categories.map((category) => {
                            const isActive = activeCategory === category.value
                            return (
                                <button
                                    key={category.value}
                                    type="button"
                                    onClick={() => setActiveCategory(category.value)}
                                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-white text-zinc-950 shadow-lg shadow-black/20"
                                        : "text-white/45 hover:bg-white/5 hover:text-white"
                                        }`}
                                    aria-pressed={isActive}
                                >
                                    {category.label}
                                </button>
                            )
                        })}
                    </div>

                    <a
                        href="#bookings"
                        className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 transition-transform duration-200 hover:scale-[1.02]"
                    >
                        Book Now
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-white">
                            <ArrowUpRight className="h-4 w-4" />
                        </span>
                    </a>
                </div>

                <div className="relative mt-10 sm:mt-12 px-5">
                    <Carousel opts={{ align: "start", dragFree: true }} className="overflow-visible">
                        <CarouselContent>
                            {visibleCars.map((car) => (
                                <CarouselItem key={car.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                                    <CarCard car={car} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="sm:scale-120 left-0 -translate-x-1/2 border-0 bg-white/20 text-white shadow-none hover:bg-white hover:text-zinc-950 sm:-left-5" size="icon" />
                        <CarouselNext className="sm:scale-120 right-0 translate-x-1/2 border-0 bg-white text-zinc-950 shadow-none hover:bg-white/90 sm:-right-5" size="icon" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default TypesOfCars