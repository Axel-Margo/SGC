import { getProductById, productsQuery } from "../services/productsServices.mjs"




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

    },

    getProductsById: async (req, res) => {
    const productId = req.params.id
        
        try { 
            const product = await getProductById(productId)
            if (!product) res.status(400).json(product.message)
                res.status(200).json(product.data)
   
        }

        catch(e) {
            console.log(e)
            res.status(500).json({message: "Erreur lors de la requête du produit par ID."})
        } 
    }
}
