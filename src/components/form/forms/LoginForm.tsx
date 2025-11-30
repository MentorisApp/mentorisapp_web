import { IslandWrapper } from "@/islands/IslandWrapper";
import { InputText } from "../inputs/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputPassword } from "../inputs/InputPassword";
import { useLogin } from "@/api/endpoints/auth.endpoints";
import { Button } from "@/components/button/Button";

const schema = z.object({
  email: z.string().min(1, "This field is required.").default(""),
  password: z.string().min(1, "This field is required.").default(""),
});

export type LoginForm = z.infer<typeof schema>;

const defaultValues = schema.parse({});

const LoginForm = () => {
  const { mutate, isPending } = useLogin();

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
    <IslandWrapper>
      <div className="mx-auto flex h-full w-[60%] flex-col items-center justify-center px-8">
        <form onSubmit={onSubmit} className="w-full">
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
          <Button severity="primary" variant="solid" type="submit">
            {isPending ? "Loading..." : "Log in"}
          </Button>
        </form>
      </div>
    </IslandWrapper>
  );
};

export { LoginForm };
