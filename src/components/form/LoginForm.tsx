import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "@/api/endpoints/auth.endpoints";
import { Button } from "@/ui/Button";
import { VerticalStack } from "@/ui/VerticalStack";
import { InputText } from "@/ui/inputs/InputText";
import { InputPassword } from "@/ui/inputs/InputPassword";

const schema = z.object({
  email: z.string().min(1, "This field is required.").default(""),
  password: z.string().min(1, "This field is required.").default(""),
});

export type LoginForm = z.infer<typeof schema>;

const defaultValues = schema.parse({});

const LoginForm = () => {
  const { mutate, isPending } = useLogin({
    onError: (data) => {
      console.log(data.message);
    },
    onSuccess: (data) => {
      console.log(data.data.accessToken);
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
    <form onSubmit={onSubmit}>
      <VerticalStack>
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
      </VerticalStack>
    </form>
  );
};

export { LoginForm };
