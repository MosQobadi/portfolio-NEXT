import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { AosWrapper } from "@/components/AosWrapper";

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

export function Skills() {
  return (
    <AosWrapper>
      <div className="py-24 sm:py-32" id="skills">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xl leading-7">Explore my</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
              Skills
            </h2>
          </div>
          <div className="mx-auto max-w-4xl  ">
            <div
              className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl  ring-2 ring-gray-200 bg-gray-50 rounded-2xl p-5 shadow-xl"
              data-aos="zoom-in"
            >
              <p className="text-2xl text-center font-bold mb-6">
                Frontend Development
              </p>
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
                {frontend.map((frontend) => (
                  <div key={frontend.name} className="relative pl-16">
                    <div className="text-base font-semibold leading-7">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                        <frontend.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      {frontend.name}
                    </div>
                    <div className="mt-2 text-base leading-7">
                      <progress
                        className="h-2 w-3/4"
                        value={frontend.value}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl text-center mt-40">
            <p className="text-xl leading-7 text-center">
              Experience with these
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-center">
              Features
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div
              className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl ring-2 ring-gray-200 bg-gray-50 rounded-2xl p-5 shadow-xl"
              data-aos="zoom-in"
            >
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </AosWrapper>
  );
}
