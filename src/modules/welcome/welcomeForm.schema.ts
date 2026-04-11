import { z as ZOD } from "zod";

export const schema = ZOD.object({
  role: ZOD.string().min(1, "Please choose an account type.").default(""),
});

export const defaultValues = schema.parse({});

export type WelcomeFormValues = ZOD.infer<typeof schema>;
