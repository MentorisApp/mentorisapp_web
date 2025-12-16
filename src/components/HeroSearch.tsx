import { useForm } from "react-hook-form";
import { DropdownSelect } from "./form/inputs/DropdownSelect";

const HeroSearch = () => {
  const form = useForm({
    defaultValues: { search: 3 },
  });

  console.log(form.watch());

  return (
    <div className="flex w-[400px] justify-around">
      <DropdownSelect hideError control={form.control} name="search" placeholder="Predmet" />
    </div>
  );
};

export { HeroSearch };
