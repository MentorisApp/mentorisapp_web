import { z as ZOD } from "zod";

export const schema = ZOD.object({
  email: ZOD.string().min(1, "This field is required.").default(""),
  password: ZOD.string().min(1, "This field is required.").default(""),
});

export const defaultValues = schema.parse({});

export type LoginForm = ZOD.infer<typeof schema>;
