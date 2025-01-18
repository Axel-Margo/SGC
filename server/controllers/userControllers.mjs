import { createUser } from "../services/userServices.mjs";
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

    findUser: async (req, res) => {
        const { email, password } = req.body

        try {
            const userAccount = await findUser(email, password)

            res.status(200).json({
                message: "Connexion réussie",
            })
        }
    catch(e){
        console.log(e)
        res.status(500).json({error: "Erreur lors de la connexion"})
    }
    }
}