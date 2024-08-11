"use client";

import { useState } from "react";
import { FixtureCard } from "./fix-card";
import { GroupedFixtures } from "../../../../../types/fixture";

export const Fixtures = ({ fix }: { fix: GroupedFixtures }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = ["Boys", "Girls"];

  //   const fixtures = fix[date] && fix[date][category] ? fix[date][category] : [];
  const fixtures =
    fix["2024-08-07"] && fix["2024-08-07"]["2023"]
      ? fix["2024-08-07"]["2023"]
      : [];

  return (
    <section className="">
      {/* Categories Tabs */}
      <div className="flex overflow-x-auto gap-1 bg-sky-300 p-1 rounded-md">
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

      <div className="bg-gray-50">
        {fixtures.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            No fixture yet!
          </div>
        ) : (
          Object.entries(fixtures).map(([groupName, groupFixtures]) => (
            <div className="mb-4 p-4" key={groupName}>
              <div className="text-sm font-semibold bg-gray-400 rounded-sm p-2">
                <h2 className="">
                  {groupFixtures[0].category} - {groupName}
                </h2>
              </div>
              {groupFixtures.map((fixture) => (
                <FixtureCard key={fixture.id} fixture={fixture} />
              ))}
            </div>
          ))
        )}
      </div>
    </section>
  );
};
