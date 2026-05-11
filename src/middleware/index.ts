import { getUserSession } from "@/api/helpers/getUserSession";
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
  const user = await getUserSession(request);
  locals.user = user;

  return next();
});
