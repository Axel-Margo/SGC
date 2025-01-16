import { z, ZodType } from 'zod'
import { patterns } from '../lib/constants'
import { UserFormData } from '../lib/types/Form'

export const userSchema: ZodType<UserFormData> = z.object({
    name: z.string().min(4, "Minimum 4 caractères."),
    
    email: z.string().min(1, "L'email est requis.").
    refine((email) => patterns.email.test(email), { message: "L'email n'est pas valide." }),
    
    password: z.string().min(6, "Le mot de passe doit faire minimum 6 caractères et contenir un signe spécial").
    refine((text) => patterns.password.test(text), {message: "Le mot de passe doit contenir entre 4-16 caractères ainsi qu'un signe spécial."}) ,

    confirmPassword: z.string().min(6)
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], 
    message: "Les mots de passe ne correspondent pas.",
  })