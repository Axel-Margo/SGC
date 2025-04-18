import { z, ZodType } from 'zod'
import { UserFormData, UserConnectData, UserInfosData } from '../../../client/src/types/Form'
import { patterns } from '../constants'

export const userSchema: ZodType<UserFormData> = z.object({
    name: z.string().min(4, "Minimum 4 caractères."),
    
    email: z.string().min(1, "L'email est requis.").
    refine((email) => patterns.email.test(email), { message: "L'email n'est pas valide." }),
    
    password: z.string().min(6, "Le mot de passe doit faire minimum 6 caractères et contenir un signe spécial").
    refine((text) => patterns.password.test(text), {message: "Le mot de passe doit contenir entre 6-16 caractères ainsi qu'un signe spécial."}) ,

    confirmPassword: z.string().min(6)
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], 
    message: "Les mots de passe ne correspondent pas.",
  })

  export const connectSchema: ZodType<UserConnectData> = z.object({
    email: z.string().email("L'email est requis."),

    password: z.string().min(6, "Le mot de passe doit faire minimum 6 caractères et contenir un signe spécial")
  })

  export const userInfosSchema: ZodType<UserInfosData> = z.object({
    name: z.string().min(4, "Minimum 4 caractères."),
    surname: z.string().min(3, "Minimum 3 caractères."), 
    email: z.string().min(1, "L'email est requis.").refine((email) => patterns.email.test(email), { message: "L'email n'est pas valide." }),
    city: z.string().min(3),
    street: z.string().min(6),
    'street-number': z.coerce.number(),
    'phone-number': z.coerce.number()

  })
 