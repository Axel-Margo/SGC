import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldError } from "react-hook-form";
import { z } from "zod";
import { FormField } from "./FormFields";
import { FormProps } from "../../types/Form";

export default function Form<T extends z.ZodType<any>>({
  linkHref,
  linkText,
  fields,
  onSubmit,
  buttonText,
  schema,
  secondaryDisplay
}: FormProps<T>) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className={`flex  gap-2 justify-start ${secondaryDisplay ? 'flex-row ' : 'flex-col' }`}>
        {fields.map((field) => (
          <FormField
            name={field.name}
            placeholder={field.placeholder}
            type={field.type}
            key={field.placeholder}
            register={register}
            error={errors[field.name] as FieldError | undefined}
          />
        ))}

        {linkText && (
          <span>
            <a href={linkHref}>{linkText}</a>
          </span>
        )}
      </div>
      <button type="submit" className="p-2 bg-white max-w-64 mt-2 w-full">
        {buttonText}
      </button>
    </form>
  );
}
