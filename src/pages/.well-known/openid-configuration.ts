import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      issuer: "https://thericetour.com",
      authorization_endpoint: "https://thericetour.com/api/auth/authorize",
      token_endpoint: "https://thericetour.com/api/auth/token",
      userinfo_endpoint: "https://thericetour.com/api/auth/userinfo",
      jwks_uri: "https://thericetour.com/.well-known/jwks.json",
      response_types_supported: [
        "code",
        "token",
        "id_token",
        "code token",
        "code id_token",
        "token id_token",
        "code token id_token"
      ],
      subject_types_supported: ["public"],
      id_token_signing_alg_values_supported: ["RS256"],
      scopes_supported: ["openid", "profile", "email"],
      token_endpoint_auth_methods_supported: ["client_secret_post", "client_secret_basic"],
      claims_supported: ["sub", "iss", "aud", "exp", "iat", "name", "email", "picture"]
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
