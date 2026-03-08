"use client"
import { loginUser } from "@/services/authService";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // const onSubmit = (data: any) => {
  //   console.log("Login data:", data);
  //   // Handle login logic here
  // };
  const onSubmit = async (e: any) => {


    try {
      const data = await loginUser({ username, password });

      console.log(data);

      localStorage.setItem("token", data.accessToken);
      setUser(data);

      alert("Login Successful");
      router.push("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-4 bg-white">
      {/* Container */}
      <div className="w-full max-w-[450px] flex flex-col items-center">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <h1 className="text-3xl font-light text-gray-700 font-serif">
            Login
          </h1>
          <div className="w-8 h-[1px] bg-gray-800"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <input
              type="username"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className={`
                w-full
                border
                ${errors.username ? "border-red-500" : "border-gray-400"}
                px-4
                py-3
                bg-transparent
                text-sm
                outline-none
                focus:border-gray-800
                placeholder:text-gray-400
              `}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <span className="text-xs text-red-500">{errors.username.message as string}</span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: "Password is required" })}
              className={`
                w-full
                border
                ${errors.password ? "border-red-500" : "border-gray-400"}
                px-4
                py-3
                bg-transparent
                text-sm
                outline-none
                focus:border-gray-800
                placeholder:text-gray-400
              `}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="text-xs text-red-500">{errors.password.message as string}</span>
            )}
          </div>

          {/* Links */}
          <div className="flex justify-between text-xs text-gray-800 mt-2">
            <button
              type="button"
              className="hover:text-black transition-colors"
            >
              Forgot your password?
            </button>
            <Link href="/signup" className="hover:text-black transition-colors">
              Create account
            </Link>
          </div>

          {/* Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="
                bg-black
                text-white
                px-10
                py-3
                text-sm
                font-medium
                hover:bg-gray-800
                transition
                duration-300
                uppercase
                tracking-wider
              "
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
