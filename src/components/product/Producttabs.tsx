"use client";

import { useState } from "react";

export default function Producttabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Tabs */}
        <div className="flex border border-gray-300 border-b-0 w-fit">

          {/* Description Tab */}
          <button
            onClick={() => setActiveTab("description")}
            className={`
              px-6 py-3 text-sm
              border-r border-gray-300
              ${
                activeTab === "description"
                  ? "bg-white text-gray-800 font-medium"
                  : "bg-[#f5f5f5] text-gray-600"
              }
            `}
          >
            Description
          </button>

          {/* Reviews Tab */}
          <button
            onClick={() => setActiveTab("reviews")}
            className={`
              px-6 py-3 text-sm
              ${
                activeTab === "reviews"
                  ? "bg-white text-gray-800 font-medium"
                  : "bg-[#f5f5f5] text-gray-600"
              }
            `}
          >
            Reviews
          </button>

        </div>

        {/* Content Box */}
        <div className="border border-gray-300 bg-white p-6 md:p-8 text-gray-600 text-sm leading-6">

          {activeTab === "description" && (
            <>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia praesentium accusantium sit aspernatur, nam laboriosam 
                veniam necessitatibus, doloribus quos harum esse porro 
                molestiae neque, officia asperiores soluta molestias. 
                Facere vel velit dicta obcaecati fugit vero esse porro 
                reiciendis. Ex, totam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Esse exercitationem quos suscipit itaque voluptas accusamus 
                beatae porro? Sint, placeat in! Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. Nostrum natus cupiditate quidem, 
                laudantium nisi iusto sit deserunt non quibusdam molestiae?
              </p>
            </>
          )}

          {activeTab === "reviews" && (
            <p>No reviews yet.</p>
          )}

        </div>

      </div>
    </section>
  );
}