export async function GET(request: Request, { params }: any) {
  const { categoryId } = params;

  const url =
    "https://apis.tisini.co.ke/apiagent7.php?leaguetopscorer=144&&categorytopscorer=";

  const res = await fetch(`${url}${categoryId}`, { cache: "no-store" });

  const product = await res.json();

  return Response.json(product);
}
