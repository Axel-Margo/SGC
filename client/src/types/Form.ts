import { FieldError, UseFormRegister } from "react-hook-form"
import { z } from "zod";

export type UserFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    
}

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
  }