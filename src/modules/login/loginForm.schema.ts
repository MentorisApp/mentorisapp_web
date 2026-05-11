import { z as ZOD } from "zod";

export const schema = ZOD.object({
  email: ZOD.string().min(1, "Adresa e-pošte je obavezno polje").default(""),
  password: ZOD.string().min(1, "Lozinka je obavezno polje").default(""),
});

export const defaultValues = schema.parse({});

export type LoginForm = ZOD.infer<typeof schema>;
