import { prisma } from "../prisma/prisma.mjs";
import bcrypt from 'bcrypt'

export const createUser = async (name, email, password) => { 

try {
    
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt);

    const addedUser = await prisma.users.create({
        data: {
            name, email, password: hashedPassword
        }
        
    })

    
    return addedUser 
}

catch (e) {
    
    console.log(e)
    res.status(500).json({ error: "Erreur lors de l'ajout de l'utilisateur à la database." });
    
} }    