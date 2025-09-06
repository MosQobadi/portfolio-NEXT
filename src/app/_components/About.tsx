import Image from "next/image";
import {
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import webImage from "../../../public/about.png";
import { AosWrapper } from "@/components/AosWrapper";

const features = [
  {
    name: "Age :",
    description: " 27 years old",
    icon: CalendarIcon,
  },
  {
    name: "Location :",
    description: " Tehran, Iran",
    icon: MapPinIcon,
  },
];

export function About() {
  return (
    <AosWrapper>
      <div
        className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
        id="about"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p
                  className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl"
                  data-aos="fade-right"
                >
                  About Me
                </p>
                <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                  Front-End Developer with over 2 years of experience delivering
                  responsive, user-focused web applications. Skilled in React,
                  TypeScript, and modern styling frameworks such as Material-UI,
                  with a strong emphasis on crafting seamless user interfaces
                  and scalable application logic. Dedicated to continuous
                  learning and contributing to innovative projects that address
                  real-world challenges and create meaningful impact.
                </p>
              </div>
            </div>
          </div>
          <div
            className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
            data-aos="fade-left"
          >
            <Image
              className="rounded-xl"
              src={webImage}
              alt="Person"
              width={912}
              height={600}
              priority
            />
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="text-base leading-7">
              <div className="grid gap-x-6 sm:grid-cols-2">
                <div
                  className="ring-2 ring-gray-200 bg-gray-50 rounded-2xl mt-10 p-5 shadow-xl"
                  data-aos="zoom-in"
                >
                  <BriefcaseIcon
                    className="h-5 w-5 mx-auto"
                    aria-hidden="true"
                  />
                  <h2 className=" text-2xl text-center font-bold tracking-tight">
                    Experience
                  </h2>
                  <p className="mt-3 list-item list-inside">
                    Rymon ( React - TypeScript - Fetch API - Redux - MUI - SASS)
                    <em> 6 months</em>
                  </p>
                  <p className="mt-3 list-item list-inside">
                    Raya (React - Internal libraries) <em> 10 months</em>
                  </p>
                  <p className="mt-3 list-item list-inside">
                    Boardim (React - Angular - RxJS - tailwind - Ant Design)
                    <em> 1 year</em>
                  </p>
                </div>
                <div
                  className="ring-2 ring-gray-200 bg-gray-50 rounded-2xl mt-10 p-5 shadow-xl"
                  data-aos="zoom-in"
                >
                  <AcademicCapIcon
                    className="h-5 w-5 mx-auto"
                    aria-hidden="true"
                  />
                  <h2 className=" text-2xl text-center font-bold tracking-tigh">
                    Self-Education
                  </h2>
                  <p className="mt-3 list-item list-inside">
                    Modern JavaScript - Brad Traversy
                  </p>
                  <p className="mt-3 list-item list-inside">
                    React - Brad Traversy
                  </p>
                  <p className="mt-3 list-item list-inside">
                    The Ultimate React Course - Jonas Schmedtmann
                  </p>
                </div>
              </div>
              <dl
                className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
                data-aos="fade-right"
              >
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </AosWrapper>
  );
}
