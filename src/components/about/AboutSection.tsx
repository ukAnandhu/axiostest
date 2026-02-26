import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-4">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-gray-700 text-xl md:text-2xl font-medium tracking-wide">
            ABOUT US
          </h2>

          <div className="w-16 h-[1px] bg-gray-400"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <Image
              src="/aboutimg.png"
              alt="about"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="text-gray-600 text-sm leading-6 space-y-5">

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officiis dolorum alias in maxime provident cupiditate nemo
              accusantium exercitationem repudiandae. Voluptates itaque
              molestiae sed commodi culpa harum laudantium assumenda cumque at?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minus vitae voluptatem distinctio labore delectus deleniti
              tenetur atque architecto eveniet. Quibusdam placeat eius
              ducimus tenetur deleniti porro exercitationem quidem fugit
              doloribus?
            </p>

            {/* Mission */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Our Mission
              </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda non eum quidem cum laudantium perferendis sunt
                autem. Id repellat veniam nesciunt modi ipsum rem amet
                minus molestiae. Dolore, aspernatur ab!
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}