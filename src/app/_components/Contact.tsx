"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { AosWrapper } from "@/components/AosWrapper";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export function Contact() {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_API_KEY || "");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit = async (data: FormValues) => {
    try {
      // console.log("Sending email with:", {
      //   serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      //   templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      //   data,
      // });

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY!
      );
      setStatus("Message sent successfully!");
      reset();
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <AosWrapper>
      <div className="py-24 sm:py-32" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl leading-7">Get in touch</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
              Contact Me
            </p>
          </div>
          <form
            action=""
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
            data-aos="zoom-in"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("firstName", {
                      required: "Enter your first name",
                    })}
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                  />
                  {errors.firstName && (
                    <p className="fixed ml-2 mt-1 text-xs text-red-600 font-medium">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("lastName", {
                      required: "Enter your last name",
                    })}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1  ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                  />
                  {errors.lastName && (
                    <p className="fixed ml-2 mt-1 text-xs text-red-600 font-medium">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("email", {
                      required: "Enter your Email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-gray-500 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="fixed ml-2 mt-1 text-xs text-red-600 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register("message", {
                      required: "Enter your message",
                    })}
                    name="message"
                    id="message"
                    rows={4}
                    className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1  ring-gray-500 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                  {errors.message && (
                    <p className="fixed ml-2 mt-1 text-xs text-red-600 font-medium">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="btn btn-outline text-sm w-full">
                Send it
              </button>
            </div>
            {status && <p className="text-sm text-center">{status}</p>}
          </form>
          <dl
            className="mt-20 space-y-3 text-base leading-7 lg:max-w-none "
            data-aos="fade-right"
          >
            <div className="relative pl-9 mt-10">
              <dt className="inline font-semibold">
                <PhoneIcon
                  className="absolute left-1 top-1 h-5 w-5"
                  aria-hidden="true"
                />
                Phone Number :
              </dt>
              <dd className="inline"> +98 9129368785</dd>
            </div>
            <div className="relative pl-9 mt-10">
              <dt className="inline font-semibold">
                <EnvelopeIcon
                  className="absolute left-1 top-1 h-5 w-5"
                  aria-hidden="true"
                />
                Email address :
              </dt>
              <dd className="inline"> mos.qobadi@gmail.com</dd>
            </div>
          </dl>
        </div>
      </div>
    </AosWrapper>
  );
}
