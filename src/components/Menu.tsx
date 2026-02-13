"use client";

import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AosWrapper } from "./AosWrapper";

type ScrollNavItem = {
  type: "scroll";
  name: string;
  id: string;
};

type DownloadNavItem = {
  type: "download";
  name: string;
  href: string;
};

type NavItem = ScrollNavItem | DownloadNavItem;

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (typeof window !== "undefined") {
        const savedTheme = window.localStorage.getItem("theme");
        setTheme(savedTheme || "light");
      }
    } catch (err) {
      console.error("Failed to get theme from localStorage:", err);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
      }
    } catch (err) {
      console.error("Failed to set theme:", err);
    }
  }, [theme, mounted]);

  return { theme, setTheme, mounted };
};

const navigation: NavItem[] = [
  { type: "scroll", name: "About Me", id: "about" },
  { type: "scroll", name: "Skills", id: "skills" },
  { type: "scroll", name: "Projects", id: "projects" },
  { type: "scroll", name: "Contact Me", id: "contact" },
  {
    type: "download",
    name: "Resume",
    href: "/mostafa-qobadi-resume-frontend-developer.pdf",
  },
];

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme, setTheme, mounted } = useTheme();

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <AosWrapper>
        <div>
          <header className="fixed bg-base-300 text-base-content shadow-lg inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <p className="-m-1.5 p-1.5 font-semibold">React Portfolio</p>
              </div>
            </nav>
          </header>
        </div>
      </AosWrapper>
    );
  }

  return (
    <header className="fixed bg-gray-50 text-base-content shadow-lg inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <p className="-m-1.5 p-1.5 font-semibold">React Portfolio</p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.type === "scroll" ? (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block
          after:block after:content-[''] after:absolute after:h-[3px]
          after:bg-current after:w-full after:scale-x-0
          after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                download
                className="text-sm font-semibold leading-6 cursor-pointer"
              >
                {item.name}
              </a>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-transparent px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={handleToggle}
                  checked={theme === "light" ? false : true}
                />
                <SunIcon className="swap-off fill-current w-6 h-6" />
                <MoonIcon className="swap-on fill-current w-6 h-6" />
              </label>
            </div>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.type === "scroll" ? (
                    <Link
                      key={item.id}
                      to={item.id}
                      spy
                      smooth
                      offset={50}
                      duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      download
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Menu;
