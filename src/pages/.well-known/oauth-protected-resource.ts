import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      resource: "https://thericetour.com",
      authorization_servers: [
        "https://thericetour.com/api/auth"
      ],
      scopes_supported: [
        "read",
        "write",
        "admin"
      ],
      bearer_methods_supported: ["header"]
    }, null, 2),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
};
