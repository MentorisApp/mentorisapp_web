import { zodResolver } from "@hookform/resolvers/zod";
import { GraduationCap, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/ui/Button";
import { RadioCards, type RadioCardOption } from "@/ui/inputs/RadioCards";
import { defaultValues, schema } from "./welcomeForm.schema";

const roleOptions: RadioCardOption[] = [
  {
    value: "regular",
    title: "Učenik",
    description: "Pronađi instruktore, uči uz pomoć i nastavi kao polaznik platforme.",
    icon: User,
  },
  {
    value: "teacher",
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

  const onSubmit = form.handleSubmit((formData) => {
    console.log(formData.role);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <RadioCards
          control={form.control}
          options={roleOptions}
          label="Odaberi tip računa"
          name="role"
          size="large"
        />

        <Button className="w-full" size="large" type="submit">
          Continue
        </Button>
      </div>
    </form>
  );
};

export { WelcomeForm };
