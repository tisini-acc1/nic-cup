const url = "https://apis.tisini.co.ke/apiagent7.php?leaguefixtureall=144";

export const getAllFixtures = async () => {
  const res = await fetch(`${url}`);

  if (!res.ok) throw new Error("Failed to fetch fixtures data");

  return res.json();
};
