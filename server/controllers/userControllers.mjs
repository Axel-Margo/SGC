import { createUser } from "../services/userServices.mjs";

export const userControllers = {
    addUser: async (req, res) => {
    
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
    }
}