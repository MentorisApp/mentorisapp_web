export async function getUserSession(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";

  const res = await fetch("http://localhost:3000/api/user/me", {
    headers: { cookie },
  });

  if (!res.ok) return null;

  const response = await res.json();

  return response.data ?? null;
}
