import { prisma } from "../prisma/prisma.mjs"

export const productsQuery = async () => {
    try {
        const allProducts = await prisma.products.findMany()
        
        if (!allProducts || allProducts.length === 0) return {success: false, message: "Aucun produit n'est disponible."}
        
        return {success: true, data: allProducts}

    }

    catch(e) {
        console.log("La requête aux produits a échouée: ", e)

        return {success: false, message:"Une erreur est survenue lors de la requête de produits."}

    }
}