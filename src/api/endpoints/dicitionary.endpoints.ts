import { createQueryHook } from "../createQueryHook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCitiesDictionary = createQueryHook<void, any>({
  method: "GET",
  url: "dictionaries/cities",
  queryKey: ["cities"],
});
