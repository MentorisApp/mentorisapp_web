import { InputText } from "../inputs/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputPassword } from "../inputs/InputPassword";
import { useEmailRegisterAccount } from "@/api/endpoints/auth.endpoints";
import { Button } from "@/components/button/Button";

const schema = z
  .object({
    email: z.string().min(1, "This field is required.").default(""),
    password: z.string().min(1, "This field is required.").default(""),
    repeatPassword: z.string().min(1, "This field is required.").default(""),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords must match",
    path: ["repeatPassword"],
  });

export type SignupForm = z.infer<typeof schema>;

const defaultValues = schema.parse({});

const SignupForm = () => {
  const { mutate, isPending } = useEmailRegisterAccount({
    onSuccess: () => {
      window.location.assign("/");
    },
  });

  const form = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = form.handleSubmit((formData) => {
    mutate({
      email: formData.email,
      password: formData.password,
    });
  });

  return (
    <form onSubmit={onSubmit} className="bg-surface flex w-[500px] flex-col rounded-xl p-6">
      <InputText
        label="Email"
        name="email"
        control={form.control}
        placeholder="youremail@address.com"
      />
      <InputPassword
        label="Password"
        name="password"
        control={form.control}
        placeholder="Enter password"
      />
      <InputPassword
        label="Repeat password"
        name="repeatPassword"
        control={form.control}
        placeholder="Repeat password"
      />
      <Button className="w-full" severity="primary" variant="solid" size="large" type="submit">
        {isPending ? "Loading..." : "Prijava"}
      </Button>
    </form>
  );
};

export { SignupForm };
