import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEmailRegisterAccount } from "@/api/endpoints/auth.endpoints";
import { Button } from "@/ui/Button";
import { VerticalStack } from "@/ui/VerticalStack";
import { InputText } from "@/ui/inputs/InputText";
import { InputPassword } from "@/ui/inputs/InputPassword";

const schema = z
  .object({
    email: z.string().min(1, "This field is required.").default(""),
    name: z.string().min(2, "This field is required.").default(""),
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
      name: formData.name,
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <VerticalStack>
        <InputText
          label="Email"
          name="email"
          control={form.control}
          placeholder="youremail@address.com"
        />
        <InputText
          label="Name"
          name="name"
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
        <Button
          className="mt-6 w-full"
          severity="primary"
          variant="solid"
          size="large"
          type="submit"
        >
          {isPending ? "Loading..." : "Prijava"}
        </Button>
      </VerticalStack>
    </form>
  );
};

export { SignupForm };
