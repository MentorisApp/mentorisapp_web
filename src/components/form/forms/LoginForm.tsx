import { IslandWrapper } from "@/components/IslandWrapper";
import { InputText } from "../inputs/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
      <div className="w-1/4 max-w-[400px] min-w-[200px]">
        <form onSubmit={onSubmit}>
          <InputText
            label="Email"
            name="email"
            required
            control={form.control}
            placeholder="Email"
          />
          <InputText
            label="Password"
            name="password"
            required
            control={form.control}
            placeholder="Password"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </IslandWrapper>
  );
};

export { LoginForm };
