import { FormFieldProps } from "../../types/Form"

export const FormField: React.FC<FormFieldProps> = ({ type, placeholder, register, name, error }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} {...register(name)} className="p-2  rounded-sm border-2 border-neutral-400" />
            { error && <span className="text-sm text-red-400">{error.message}</span> }
        </>
  
    )
}
