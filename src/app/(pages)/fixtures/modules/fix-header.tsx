"use client";

import { useState } from "react";

export const FixturesHeader = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = ["15 Aug", "16 Aug", "17 Aug", "18 Aug"];

  return (
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
  );
};
