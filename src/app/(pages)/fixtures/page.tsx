import { getAllFixtures } from "@/lib/data/fetch-fixtures";
import { Fixture } from "../../../../types/fixture";
import { Fixtures } from "./modules/fixtures";
import { TopScorers } from "./modules/top-scorers";
import { FixturesHeader } from "./modules/fix-header";

const FixturesPage = async () => {
  const fixtureData: Promise<Fixture[]> = getAllFixtures();

  const fixtures = await fixtureData;

  // console.log(fixtures.length);

  return (
    <main className="h-screen pt-28">
      <FixturesHeader />

      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <Fixtures />
        </div>

        <div className="col-span-4">
          <TopScorers />
        </div>
      </div>
    </main>
  );
};

export default FixturesPage;
