import { z as ZOD } from "zod";

export const schema = ZOD.object({
  role: ZOD.enum(["USER", "TEACHER"])
    .nullable()
    .refine((val) => val !== null, {
      message: "Obavezan odabir",
    })
    .default(null),
});

export const defaultValues = schema.parse({});

export type WelcomeFormValues = ZOD.infer<typeof schema>;
