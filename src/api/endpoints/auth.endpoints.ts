import { z } from "zod";
import { createMutationHook } from "../helpers/createMutationHook";
import { createQueryHook } from "../helpers/createQueryHook";

const schema = z.object({
  email: z.string().min(1, "This field is required.").default(""),
  password: z.string().min(1, "This field is required.").default(""),
});

export type LoginForm = z.infer<typeof schema>;

// TODO types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLogin = createMutationHook<LoginForm, any>({
  method: "POST",
  url: "auth/login",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLogout = createMutationHook<void, any>({
  method: "POST",
  url: "auth/logout",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEmailRegisterAccount = createMutationHook<any, any>({
  method: "POST",
  url: "auth/register",
});
