export const prerender = false;

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: "https://thericetour.com/",
        "service-desc": [
          {
            href: "https://thericetour.com/llms.txt",
            type: "text/markdown"
          }
        ],
        "service-doc": [
          {
            href: "https://thericetour.com/llms.txt",
            type: "text/markdown"
          }
        ],
        "status": [
          {
            href: "https://thericetour.com/"
          }
        ]
      }
    ]
  };

  return new Response(JSON.stringify(catalog), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800"
    }
  });
}
