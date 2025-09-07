import Image from "next/image";
import BookingCabins from "../../../public/screenshot4.png";
import { AosWrapper } from "@/components/AosWrapper";

const projects = [
  {
    id: 4,
    name: "Booking Hotel",
    href: "https://booking-hotel-mauve.vercel.app/",
    imageSrc: BookingCabins,
    used: "React Query / Supabase for server / React Hook Form / Styled Components for UI",

    description:
      "A modern cabin booking management app designed for small hotels, lodges, or rental owners. This mini app allows admins to add and manage cabins (rooms), track availability, and handle basic reservations.",
  },
];

export function Projects() {
  return (
    <AosWrapper>
      <div id="projects">
        <div className="mx-auto max-w-2xl text-center mt-40">
          <div className="text-center">
            <p className="text-lg leading-7">Browse my recent</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
              Projects
            </h2>
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
                  className="relative ring-1 ring-gray-200 bg-gray-50 rounded-2xl shadow-xl h-full flex flex-col"
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
    </AosWrapper>
  );
}
