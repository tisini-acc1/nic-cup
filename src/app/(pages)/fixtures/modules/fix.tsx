"use client";

import React, { useState } from "react";
import { FixturesHeader } from "./fix-header";
import { Fixtures } from "./fixtures";
import { TopScorers } from "./top-scorers";
import { GroupedFixtures } from "../../../../../types/fixture";

export const Fix = ({ fixtures }: { fixtures: GroupedFixtures }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCat, setActiveCat] = useState(0);

  return (
    <main className="md:pt-28 pt-24 md:px-2">
      <FixturesHeader
        activeTab={activeTab}
        activeCat={activeCat}
        setActiveTab={setActiveTab}
        setActiveCat={setActiveCat}
      />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 lg:col-span-8">
          <Fixtures fix={fixtures} cat={activeCat} />
          {/* <div className="w-full h-[500px] flex items-center justify-center border border-black">
            No Matches Yet!
          </div> */}
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-4">
          <TopScorers />
        </div>
      </div>
    </main>
  );
};
