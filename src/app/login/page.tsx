
export default function LoginPage() {
  return (
    <section className="w-full min-h-screen  flex items-center justify-center px-4">

      {/* Container */}
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <h1 className="text-2xl font-medium text-gray-700">
            Login
          </h1>

          <div className="w-12 h-[1px] bg-gray-400"></div>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="
              w-full
              border
              border-gray-400
              px-4
              py-3
              bg-transparent
              text-sm
              outline-none
              focus:border-gray-600
            "
          />

          {/* Password */}
          <input
            type="password"
            placeholder="password"
            className="
              w-full
              border
              border-gray-400
              px-4
              py-3
              bg-transparent
              text-sm
              outline-none
              focus:border-gray-600
            "
          />

          {/* Links */}
          <div className="flex justify-between text-sm text-gray-600">

            <button
              type="button"
              className="hover:underline"
            >
              Forgot your password?
            </button>

            <button
              type="button"
              className="hover:underline"
            >
              Create account
            </button>

          </div>

          {/* Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="
                bg-black
                text-white
                px-8
                py-3
                text-sm
                hover:bg-gray-800
                transition
                duration-300
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
