import { createUser, findUser } from "../services/userServices.mjs";
import { userSchema } from '../../dist/shared/lib/schemas/userSchema.js';


export const userControllers = {
    addUser: async (req, res) => {
    
    try {
        userSchema.parse(req.body)
        console.log('VOICI LE USER:',req.body)
    }

    catch (e) {
        console.error("Validation error:", e.errors);
        res.status(400).send(e.errors)
    }
    
    const { name, email, password } = req.body
    try {
        const user = await createUser(name, email, password)

        res.status(201).json({
            message: "L'utilisateur a bien été créé.",
            user: user
          })
    }
    
    catch(e){
        console.log(e)
        
        res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
        
    }
    },

    connectUser: async (req, res) => {
        const { email, password } = req.body

        try {
            const result = await findUser(email, password)
            if(!result.success) return res.status(400).json({message: result.message})
                
            res.status(200).json({message: result.message})
        }
        catch(e){
        console.log(e)
        
        res.status(500).json({error: "Erreur lors de la connexion."})
        }
    }
}