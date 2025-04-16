import { createUser, findUser } from "../services/userServices.mjs";
import { userSchema } from '../../dist/shared/lib/schemas/userSchema.js';


export const userControllers = {
    addUser: async (req, res) => {
    
    try {
        userSchema.parse(req.body)
    }

    catch (e) {
        console.error("Validation error:", e.errors);
        res.status(400).send(e.errors)
    }
    
    const { body: {name, email, password }, session: {id} } = req
    try {
        
        const user = await createUser(name, email, password)

        res.status(201).json({
            message: "L'utilisateur a bien été créé."
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
            req.session.user = result.user 
            res.status(200).json(
                {user: req.session.user}            )
        }
        catch(e){
        console.log(e)
        
        res.status(500).json({error: "Erreur lors de la connexion."})
        }
    },
    
    addInfos: async (req, res) => {
        const isUserConnected = req.session.user
        console.log(isUserConnected)
    }
}