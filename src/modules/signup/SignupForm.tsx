import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEmailRegisterAccount } from "@/api/endpoints/auth.endpoints";
import { Button } from "@/ui/Button";
import { VerticalStack } from "@/ui/VerticalStack";
import { InputText } from "@/ui/inputs/InputText";
import { InputPassword } from "@/ui/inputs/InputPassword";

const schema = z.object({
  email: z.string().min(1, "Adresa e-pošte je obavezno polje").default(""),
  name: z.string().min(2, "Osobno ime je obavezno polje").default(""),
  password: z.string().min(1, "Lozinka je obavezno polje").default(""),
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
          label="Adresa e-pošte"
          name="email"
          control={form.control}
          placeholder="email@adresa.com"
        />
        <InputText label="Osobno ime" name="name" control={form.control} placeholder="Unesite" />
        <InputPassword
          label="Lozinka"
          name="password"
          control={form.control}
          placeholder="Unesite lozinku"
        />
        <Button
          className="mt-6 w-full"
          severity="primary"
          variant="solid"
          size="large"
          type="submit"
        >
          {/* TODO loading state */}
          {isPending ? "Loading..." : "Kreiraj"}
        </Button>
      </VerticalStack>
    </form>
  );
};

export { SignupForm };
