const url =
  "https://apis.tisini.co.ke/apiagent7.php?leaguetopscorer=143&categorytopscorer=2023";

export const getTopScorers = async () => {
  const res = await fetch(`${url}`);

  if (!res.ok) throw new Error("Failed to fetch scorers data");

  return res.json();
};
