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
    try {
        const user = await prisma.users.findUnique({
            where: {
                 email
            }
        })

        if (!user) {
            console.log("L'utilisateur n'a pas été trouvé.") 
            return {succes: false, message: "Utilisateur non trouvé"}
        }
    }
    catch(e) {console.log(e)
        return res.status(500).json({error: "Erreur lors de la requête utilisateur"})
    }
    try {
        const isPassword = await bcrypt.compare(password, user.password, (err, res) =>{
            if (err) console.log(err)
            
            if (!res) console.log('Le mot de passe est incorrecte.')
                console.log('Connexion réussie.') 
            })
    }
    catch (e){
        
        console.log(e)
        return res.status(500).json({error: "Erreur lors de la comparaison des mots de passes."})
    }

    
}