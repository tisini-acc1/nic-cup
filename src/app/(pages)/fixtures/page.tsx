import { Fixtures } from "./modules/fixtures";
import { TopScorers } from "./modules/top-scorers";
import { Fixture } from "../../../../types/fixture";
import { FixturesHeader } from "./modules/fix-header";
import GroupFixtures from "@/lib/data/group-fixtures";
import { getTopScorers } from "@/lib/data/fetch-scorers";
import { getAllFixtures } from "@/lib/data/fetch-fixtures";

const FixturesPage = async () => {
  const fixtureData: Promise<Fixture[]> = getAllFixtures();
  const scorersData = getTopScorers("1");

  const scorers = await scorersData;

  const data = await fixtureData;
  const fixtures = GroupFixtures(data);
  // console.log(scorers);
  // console.log(fixtures);

  return (
    <main className="mt-[87px]">
      <FixturesHeader />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 lg:col-span-8">
          <Fixtures fix={fixtures} />
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

export default FixturesPage;
