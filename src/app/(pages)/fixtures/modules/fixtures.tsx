"use client";

import { useEffect, useState } from "react";
import { FixtureCard } from "./fix-card";
import { GroupedFixtures } from "../../../../../types/fixture";

const DATES = ["2024-08-15", "2024-08-16", "2024-08-17", "2024-08-18"];

export const Fixtures = ({ fix }: { fix: GroupedFixtures }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [date, setDate] = useState(DATES[0]);
  const [category, setCategory] = useState("U7");

  const fixtures = fix[date] && fix[date][category] ? fix[date][category] : [];

  // useEffect(() => {
  //   const category = Object.
  // }, [fixtures]);

  return (
    <section className="">
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
