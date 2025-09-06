"use client";

import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const frontend = [
  {
    name: "React",
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: "JavaScript",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: "Material-UI",
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: "TypeScript",
    value: 40,
    icon: CheckCircleIcon,
  },
  {
    name: "Git",
    value: 50,
    icon: CheckCircleIcon,
  },
  {
    name: "HTML/CSS",
    value: 80,
    icon: CheckCircleIcon,
  },
];
// const backend = [
//   {
//     name: "NodeJS",
//     value: 30,
//     icon: CheckCircleIcon,
//   },
//   {
//     name: "Python",
//     value: 75,
//     icon: CheckCircleIcon,
//   },
//   {
//     name: "MySQL",
//     value: 50,
//     icon: CheckCircleIcon,
//   },
//   {
//     name: "APIs",
//     value: 20,
//     icon: CheckCircleIcon,
//   },
//   {
//     name: "MongoDB",
//     value: 40,
//     icon: CheckCircleIcon,
//   },
//   {
//     name: "GraphQL",
//     value: 30,
//     icon: CheckCircleIcon,
//   },
// ];

export function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-24 sm:py-32" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Explore my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </p>
        </div>
        <div className="mx-auto max-w-4xl  ">
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl  ring-2 ring-gray-200 bg-gray-50 rounded-2xl p-5 shadow-xl"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Frontend Development
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {frontend.map((frontend) => (
                <div key={frontend.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <frontend.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {frontend.name}
                  </dt>
                  <div className="mt-2 text-base leading-7">
                    <progress
                      className="h-2 w-3/4"
                      value={frontend.value}
                      max="100"
                    ></progress>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          {/* <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Backend Development
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {backend.map((backend) => (
                <div key={backend.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <backend.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {backend.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={backend.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div> */}
        </div>
        <div className="mx-auto max-w-2xl text-center mt-40">
          <h2 className="text-xl leading-7 text-center">
            Experience with these
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-center">
            Features
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl ring-2 ring-gray-200 bg-gray-50 rounded-2xl p-5 shadow-xl"
            data-aos="zoom-in"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              <span className="mt-3 list-item list-inside text-lg font-bold">
                Redux
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                Redux Tool Kit
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                React Query
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                Context API
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                SASS
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                React Hook Form
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                Tailwind CSS
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                CSS modules / Styled Components
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                Material-UI
              </span>
              <span className="mt-3 list-item list-inside text-lg font-bold">
                Agile / Scrum
              </span>
            </dl>
          </div>
        </div>
        {/* <div
          className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
          data-aos="zoom-in"
        >
          <span className="mt-3 list-item list-inside">Redux</span>
          <span className="mt-3 list-item list-inside">
            React - Brad Traversy
          </span>
          <p className="mt-3 list-item list-inside">
            The Ultimate React Course - Jonas Schmedtmann
          </p>
        </div> */}
      </div>
    </div>
  );
}
