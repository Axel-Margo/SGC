import { FieldError, UseFormRegister } from "react-hook-form"
import { z } from "zod";
import { connectSchema } from "../../../shared/lib/schemas/userSchema";

export type UserFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    }
export type UserConnectData = {
    email: string;
    password: string
}

export type UserInfosData = {
    name: string;
    surname: string;
    email: string;
    street: string;
    'street-number': number
    'phone-number': number;
    city: string;
}
export type UserConnexionData = z.infer<typeof connectSchema>

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<UserFormData>;
    error?: FieldError | undefined;
}

type ValidFieldNames = keyof UserFormData;
  

export interface FormProps<T extends z.ZodType<any>> {
    schema: T;
    fields: FormFieldProps[]; 
    onSubmit: (data: z.infer<T>) => void; 
    buttonText: string; 
    linkText?: string;
    linkHref?: string;
    secondaryDisplay?: boolean; 
  }

