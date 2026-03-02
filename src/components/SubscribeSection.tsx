"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

export default function SubscribeSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert(`Subscribed with: ${data.email}`);
    reset(); // Clear the form after successful submission
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-[22px] sm:text-2xl font-medium text-gray-800">
          Subscribe now & get 20% off
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 mt-3 mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptate.
        </p>

        {/* Input + Button Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:w-3/4 flex items-center mx-auto border"
        >
          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full sm:flex-1 h-12 px-4 text-sm
              outline-none bg-white text-gray-600
            "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-[140px] h-12 bg-black text-white text-xs font-medium"
          >
            SUBSCRIBE
          </button>
        </form>

        {/* Error Message Component */}
        {errors.email && (
          <p className="text-red-500 text-xs mt-2 text-center">
            {errors.email.message}
          </p>
        )}
      </div>
    </section>
  );
}