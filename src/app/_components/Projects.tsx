"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// import movieFinderImage from "../screenshot1.png";
import travelMapImage from "../../../public/screenshot2.jpg";
import BookingCabins from "../../../public/screenshot4.png";

const projects = [
  // {
  //   id: 1,
  //   name: "Movie Finder",
  //   href: "https://movie-finder-git-main-mos-projects-69f075c2.vercel.app/",
  //   imageSrc: movieFinderImage,
  //   used: "ReactJS, Fetch API, React-Swiper",
  //   description:
  //     "find your favorite movie and rate them and add them to your wishlist",
  // },
  {
    id: 4,
    name: "Booking Hotel",
    href: "https://booking-hotel-mauve.vercel.app/",
    imageSrc: BookingCabins,
    used: "React Query / Supabase for server / React Hook Form / Styled Components for UI",

    description:
      "A modern cabin booking management app designed for small hotels, lodges, or rental owners. This mini app allows admins to add and manage cabins (rooms), track availability, and handle basic reservations.",
  },
  {
    id: 2,
    name: "Travel Map",
    href: "https://travel-map-flax.vercel.app/",
    imageSrc: travelMapImage,
    used: "Context API, Custom Hooks, Leaflet Maps, Geolocation API, Interactive Map Navigation, JSON Data Management, CSS Modules",

    description:
      "A travel map application that allows users to view and interact with maps of various locations. The application provides a user-friendly interface for exploring maps, searching for specific locations, and adding markers to the map.",
  },

  // {
  //   id: 3,
  //   name: "Ordering Pizza",
  //   href: "https://ordering-pizza-git-main-mos-projects-69f075c2.vercel.app/",
  //   imageSrc: orderingPizzaImage,
  //   used: "React, Redux ,Redux Toolkit, React Router, Tailwind",

  //   description:
  //     "A pizza ordering app where users can browse the menu, add multiple pizzas to their cart, and confirm their order. The project emphasizes code optimization, performance, and clean architecture.",
  // },
];

export function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl text-center mt-40">
        <div className="text-center">
          <h2 className="text-lg leading-7">Browse my recent</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Projects
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 xl:gap-x-8 place-items-center">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              rel="noreferrer"
              target="_blank"
              className="group max-w-2xl w-full"
            >
              <div
                className="relative ring-1 ring-base-300 bg-base-200 rounded-2xl shadow-xl h-full flex flex-col"
                data-aos="flip-left"
              >
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    width={1200}
                    height={800}
                    className="h-full w-auto object-center group-hover:opacity-75 transition-opacity"
                    priority
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <p className="text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-medium">{project.used}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
//  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl "></div>;
