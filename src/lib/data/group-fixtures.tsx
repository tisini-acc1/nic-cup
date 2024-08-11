import { Fixture, GroupedFixtures } from "../../../types/fixture";

const GroupFixtures = (data: Fixture[]) => {
  const groupData = (data: Fixture[]) => {
    const groupedData: GroupedFixtures = {};

    data.forEach((fixture) => {
      const { game_date, category, groupname } = fixture;
      const date = game_date.split(" ")[0];

      if (!groupedData[date]) {
        groupedData[date] = {};
      }

      if (!groupedData[date][category]) {
        groupedData[date][category] = {};
      }

      if (!groupedData[date][category][groupname]) {
        groupedData[date][category][groupname] = [];
      }

      groupedData[date][category][groupname].push(fixture);
    });

    return groupedData;
  };

  const groupedData = groupData(data);
  // console.log(groupedData);

  return groupedData;
};

export default GroupFixtures;
