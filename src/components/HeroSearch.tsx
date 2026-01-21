import { useForm } from "react-hook-form";
import { DropdownSelect } from "./form/inputs/DropdownSelect";

const HeroSearch = () => {
  const form = useForm({
    defaultValues: { input1: null, input2: null, input3: null },
  });

  console.log(form.watch());

  return (
    <div className="flex w-[400px] flex-col justify-around">
      <DropdownSelect
        className="rounded-full"
        hideError
        control={form.control}
        name="input1"
        placeholder="Predmet"
      />
    </div>
  );
};

export { HeroSearch };
