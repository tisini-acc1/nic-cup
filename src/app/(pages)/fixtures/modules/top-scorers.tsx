"use client";

import { useAppContext } from "@/context";
import { useEffect, useState } from "react";
import { Player, Scores } from "../../../../../types/fixture";

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

const catIds = ["9", "10", "11", "12", "2", "13", "14", "17", "16"];

export const TopScorers = () => {
  const { activeCat } = useAppContext();
  const [scorers, setScorers] = useState<Player[]>([]);

  const categoryId = catIds[activeCat] || "1";

  useEffect(() => {
    const getPayments = async () => {
      const res = await fetch(`/api/scorers/${categoryId}`);
      const data = await res.json();
      setScorers(data);
    };

    if (categoryId) getPayments();
  }, [categoryId]);

  // console.log(scorers);
  // console.log(`/api/scorers/${categoryId}`);

  return (
    <div className="w-full  border overflow-y-auto">
      <h1 className="font-bold mb-2 bg-sky-300 p-4">
        {categories[activeCat]} Top scorers
      </h1>

      {scorers.length === 0 ? (
        <div className="w-full h-[500px] flex items-center justify-center border border-black">
          No Scorers Yet!
        </div>
      ) : (
        scorers.map((scorer, index) => (
          <div
            key={scorer.pname}
            className="flex items-center justify-between px-4 py-2 border-b"
          >
            <div className="flex gap-1 items-center">
              <div className="text-gray-500 italic">{index + 1}</div>
              <div>
                <div>{scorer.pname}</div>
                <div className="text-gray-400">{scorer.name}</div>
              </div>
            </div>
            <div>{scorer.tot}</div>
          </div>
        ))
      )}
    </div>
  );
};
