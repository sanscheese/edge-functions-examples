export default async(Request) => {
  return new Response("Make this into the transform example :)", {
    headers: { "content-type": "text/html" },
  });
};