import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const skipPaths = ["/login", "/signup", "/public", "/favicon.ico"];

  if (
    skipPaths.some((path) => url.pathname.startsWith(path)) ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico)$/)
  ) {
    return next();
  }

  if (!context.locals.user) {
    const cookieHeader = context.request.headers.get("cookie") ?? "";

    try {
      const res = await fetch("http://localhost:3000/api/auth/me", {
        headers: { cookie: cookieHeader },
      });

      const data = await res.json();
      console.log("🚀 ~ data:", data);

      context.locals.user = data.data;
    } catch (err) {
      console.error("Failed to fetch user:", err);
      context.locals.user = null;
    }
  }

  // now user is cached in context.locals.user for the rest of this request
  return next();
});
