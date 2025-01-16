import { FieldError, UseFormRegister } from "react-hook-form"

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
    error: FieldError | undefined;
}

export type ValidFieldNames =
  | "name"
  | "email"
  | "password"
  | "confirmPassword"