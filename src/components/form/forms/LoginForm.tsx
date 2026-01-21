import { InputText } from "../inputs/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputPassword } from "../inputs/InputPassword";
import { useLogin } from "@/api/endpoints/auth.endpoints";
import { Button } from "@/components/button/Button";
import { useTokenHandler } from "@/hooks/useTokenHandler";

const schema = z.object({
  email: z.string().min(1, "This field is required.").default(""),
  password: z.string().min(1, "This field is required.").default(""),
});

export type LoginForm = z.infer<typeof schema>;

const defaultValues = schema.parse({});

const LoginForm = () => {
  const { login } = useTokenHandler();

  const { mutate, isPending } = useLogin({
    onSuccess: (data) => {
      console.log(data.data.accessToken);
      if (data.data.accessToken) {
        login(data.data.accessToken);
        window.location.assign("/");
      }
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
    <div className="bg-bg mx-auto flex h-full w-[60%] flex-col items-center justify-center px-8">
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
        <Button className="w-full" severity="primary" variant="solid" size="large" type="submit">
          {isPending ? "Loading..." : "Prijava"}
        </Button>
      </form>
    </div>
  );
};

export { LoginForm };
