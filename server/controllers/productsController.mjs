import { productsQuery } from "../services/productsServices.mjs"




export const productsControllers = {
    getProducts: async (req, res) => {
        try { 
            const products = await productsQuery() 
            console.log(products.data)

            if (!products) res.status(400).send(products.message)
            
            return res.status(200).json(products.data)
        }

        catch(e) {
            console.log(e)
            res.status(400).json({error: "Erreur lors de l'appel à la database.'"})
        }

    }
}