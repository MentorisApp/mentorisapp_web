import { zodResolver } from "@hookform/resolvers/zod";
import { GraduationCap, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/ui/Button";
import { RadioCards, type RadioCardOption } from "@/ui/inputs/RadioCards";
import { defaultValues, schema } from "./welcomeForm.schema";
import { VerticalStack } from "@/ui/VerticalStack";

const roleOptions: RadioCardOption[] = [
  {
    value: "USER",
    title: "Učenik",
    description: "Pronađi instruktore, uči uz pomoć i nastavi kao polaznik platforme.",
    icon: User,
  },
  {
    value: "TEACHER",
    title: "Instruktor",
    description: "Kreiraj svoj profil, ponudi predavanja i počni podučavati druge.",
    icon: GraduationCap,
  },
];

const WelcomeForm = () => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const selectedOption = form.watch("role");

  const onSubmit = form.handleSubmit((formData) => {
    console.log(formData.role);
  });

  return (
    <form onSubmit={onSubmit}>
      <VerticalStack>
        <RadioCards
          control={form.control}
          options={roleOptions}
          label="Odaberi tip računa"
          name="role"
          size="large"
        />

        <Button disabled={!selectedOption} className="w-full" size="large" type="submit">
          Nastavi
        </Button>
      </VerticalStack>
    </form>
  );
};

export { WelcomeForm };
