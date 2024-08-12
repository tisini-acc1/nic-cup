import { getAllFixtures } from "@/lib/data/fetch-fixtures";
import { Fixture } from "../../../../types/fixture";
import { Fixtures } from "./modules/fixtures";
import { TopScorers } from "./modules/top-scorers";
import { FixturesHeader } from "./modules/fix-header";
import GroupFixtures from "@/lib/data/group-fixtures";
import { getTopScorers } from "@/lib/data/fetch-scorers";
import { Fix } from "./modules/fix";

const FixturesPage = async () => {
  const fixtureData: Promise<Fixture[]> = getAllFixtures();
  const scorersData = getTopScorers();

  const scorers = await scorersData;

  const data = await fixtureData;
  const fixtures = GroupFixtures(data);

  // console.log(fixtures);

  return <Fix fixtures={fixtures} />;
};

export default FixturesPage;
