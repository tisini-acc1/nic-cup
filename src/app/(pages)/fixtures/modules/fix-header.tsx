"use client";

import { useAppContext } from "@/context";

export const FixturesHeader = () => {
  const { activeTab, activeCat, setActiveCat, setActiveTab } = useAppContext();

  const tabs = ["15 Aug", "16 Aug", "17 Aug", "18 Aug"];

  const categories = [
    "U7",
    "U9",
    "U11",
    "U13",
    "U15 Boys",
    "U15 Girls",
    "U17Boys",
    "U17 Girls",
    "U20",
  ];

  // console.log(activeTab);

  return (
    <header>
      <div className="flex overflow-x-auto gap-1 bg-sky-300 p-1 rounded-md mt-1">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`p-2 md:p-4 rounded-lg text-gray-700 text-base font-bold flex-grow w-80 hover:bg-gray-300 hover:bg-opacity-40 ${
              activeTab === idx ? "bg-sky-500" : ""
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Categories Tabs */}
      <div className="flex overflow-x-auto gap-1 bg-sky-300 p-1 rounded-md overflow-hidden">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className={`p-2 md:p-4 rounded-lg text-gray-700 text-base font-bold flex-grow w-80 hover:bg-gray-300 hover:bg-opacity-40 whitespace-nowrap ${
              activeCat === idx ? "bg-sky-500" : ""
            }`}
            onClick={() => setActiveCat(idx)}
          >
            {category}
          </button>
        ))}
      </div>
    </header>
  );
};
