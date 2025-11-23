import { IslandWrapper } from "@/components/IslandWrapper";
import { InputText } from "../inputs/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputPassword } from "../inputs/InputPassword";

const schema = z.object({
  email: z.string().min(1, "This field is required.").default(""),
  password: z.string().min(1, "This field is required.").default(""),
});

const defaultValues = schema.parse({});

const LoginForm = () => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = form.handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <IslandWrapper>
      <div className="mx-auto flex h-full flex-col items-center justify-center px-6">
        <form onSubmit={onSubmit} className="w-full max-w-[60%]">
          <InputText name="email" control={form.control} placeholder="Email" optional />
          <InputPassword name="password" control={form.control} placeholder="Password" />
          <button type="submit">submit</button>
        </form>
      </div>
    </IslandWrapper>
  );
};

export { LoginForm };
