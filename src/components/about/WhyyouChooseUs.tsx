import SubscribeSection from "../SubscribeSection";

export default function WhyyouChooseUs() {
  return (
    <div>
      <section className="w-full py-16 px-4">
          
        {/* Container */}
        <div className="max-w-6xl mx-auto">
  
          {/* Heading */}
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-gray-700 text-lg md:text-xl font-medium tracking-wide">
              WHY CHOOSE US
            </h2>
  
            <div className="w-16 h-[1px] bg-gray-400"></div>
          </div>
  
          {/* Cards */}
          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-3 
            border 
            border-gray-300
          ">
  
            {/* Card 1 */}
            <div className="
              p-10
              border-b md:border-b-0
              md:border-r
              border-gray-300
            ">
              <h3 className="font-semibold text-gray-800 mb-4 text-sm">
                Quality Assurance:
              </h3>
  
              <p className="text-gray-600 text-sm leading-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat repudiandae ad illo blanditiis ducimus voluptatum 
                alias consequuntur at quidem ipsa.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="
              p-10
              border-b md:border-b-0
              md:border-r
              border-gray-300
            ">
              <h3 className="font-semibold text-gray-800 mb-4 text-sm">
                Convenience:
              </h3>
  
              <p className="text-gray-600 text-sm leading-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat repudiandae ad illo blanditiis ducimus voluptatum 
                alias consequuntur at quidem ipsa.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="p-10">
              <h3 className="font-semibold text-gray-800 mb-4 text-sm">
                Exceptional Customer Service:
              </h3>
  
              <p className="text-gray-600 text-sm leading-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat repudiandae ad illo blanditiis ducimus voluptatum 
                alias consequuntur at quidem ipsa.
              </p>
            </div>
  
          </div>
  
        </div>
  
      </section>
      <SubscribeSection />
    </div>
  );
}