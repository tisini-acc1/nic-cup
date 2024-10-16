"use client";

import { FixtureCard } from "./fix-card";
import { GroupedFixtures } from "../../../../types/fixture";
import { useAppContext } from "@/context";

const categories = [
  "U7",
  "U9",
  "U11",
  "U13",
  "U15 Boys",
  "U15 Girls",
  "U17 Boys",
  "U17 Girls",
  "U20",
];

export const Fixtures = ({ fix }: { fix: GroupedFixtures }) => {
  const { activeCat, activeTab, DATES } = useAppContext();

  const date = DATES[activeTab];

  const fixtures =
    fix[date] && fix[date][categories[activeCat]]
      ? fix[date][categories[activeCat]]
      : [];

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
