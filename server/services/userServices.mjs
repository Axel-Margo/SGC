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

export const findUser = async (email, password) => {
    const user = await prisma.users.findUnique({
            where: {
                 email
            }
        })
            if (user == null) return {success: false, message: "Cet utilisateur n'existe pas."}
        
    
    try {
        const isPassword = await bcrypt.compare(password, user.password)
            if (!isPassword) return {success: false, message: "Mot de passe érroné."}
        return {user: user.id, success: true, message: "Connexion réussie !"}
        }
    
    catch (e){
        console.log(e)
        return res.status(500).json({error: e})
    }

    
}

