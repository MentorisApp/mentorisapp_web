import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/api/endpoints/auth.endpoints";
import { Button } from "@/ui/Button";
import { VerticalStack } from "@/ui/VerticalStack";
import { InputText } from "@/ui/inputs/InputText";
import { InputPassword } from "@/ui/inputs/InputPassword";
import { defaultValues, schema } from "./loginForm.schema";

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
    defaultValues: defaultValues,
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
        {/* TODO form config function for inputs (name, label, schema, default values...) */}
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

export { LoginForm };
