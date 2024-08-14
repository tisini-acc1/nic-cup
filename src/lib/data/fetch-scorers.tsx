const url =
  "https://apis.tisini.co.ke/apiagent7.php?leaguetopscorer=143&&categorytopscorer=";

export const getTopScorers = async (id: string) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) throw new Error("Failed to fetch scorers data");

  return res.json();
};
