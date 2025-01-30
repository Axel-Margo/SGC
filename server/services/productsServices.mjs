import { prisma } from "../prisma/prisma.mjs"

export const productsQuery = async () => {
    try {
        const allProducts = await prisma.products.findMany({
            select: {
                id: true,
                name: true,
                category_id: true,
                price: true,
                gender_id: true,
                picture: true
            }
        })
        
        if (!allProducts || allProducts.length === 0) return {success: false, message: "Aucun produit n'est disponible."}
        
        return {success: true, data: allProducts}

    }

    catch(e) {
        console.log("La requête aux produits a échouée: ", e)

        return {success: false, message:"Une erreur est survenue lors de la requête de produits."}

    }
}

export const getProductById = async (id) => {
    const productId = parseInt(id)
    
    try {
        const getProduct = await prisma.products.findFirst({
            where: {
                id: productId
            },
            select: {
                id: true,
                name: true,
                category_id: true,
                price: true,
                gender_id: true,
                picture: true
            }
        }) 
        
        if (!getProduct || getProduct == null) return {success: false, message: "Aucun produit n'est attribué à cet ID."}
        
        return {success: true, data: getProduct}
    }

    catch(e) {
        console.log(e)
        
        return {success: false, message: "Erreur lors de la requête par ID."}
    }
}