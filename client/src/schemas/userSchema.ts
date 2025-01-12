import { z } from 'zod'
import { patterns } from '../lib/constants'
export const userSchema = z.object({
    username: z.string().min(4, "Minimum 4 characters"),
    
    email: z.string().min(1, "Email is required").
    refine((email) => patterns.email.test(email), { message: "Email is not valid" }),
    
    password: z.string().min(6).
    refine((text) => patterns.password.test(text), {message: "Le mot de passe doit contenir entre 4-16 caractères et un signe spécial"} )
})