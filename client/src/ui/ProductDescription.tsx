import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductInfo } from "../types/Products"


export default function ProductDescription(){
    const { id } = useParams()
    const [product, setProduct] = useState<ProductInfo | null>(null)
    
    
    useEffect(() => {
        const fetchProduct = async () => {
           try { 
                const product = await fetch(`http://localhost:4200/products/${id}`) 

                if(!product.ok) {
                    throw new Error (`Erreur HTTP: ${product.status}`)
                }
                
                const result = await product.json()
                console.log(result)
        
                setProduct(result)
                }
            
            
            catch(e) {
                console.log(e)
            }
        
        
        }
        fetchProduct()

    }, [id])
    
    
    if (!product) return (
        <div>Chargement...</div>
    )
    
    return (
    
        <>
                
                <div className='md:w-1/2 md:max-w-[300px] md:min-w-[300px]'>
                <img src={product.picture[0].link}/>
                </div>
        <div className='mt-0' id='info-product'>
                    <div className='flex flex-row justify-between '>
                        <h1 className='text-2xl'>{product?.name}</h1>
                        <a href='#' >LIKE</a>
                        </div>
        </div>
            
                <span className='text-black/50'>Catégorie {product.category_id[0].name} </span>
                <div className='mt-5 '>
                <span className='font-bold text-xl'>{product.price}€</span>
                </div>
            
                <div className=' bg-purple-300/40 mt-8'>
                    <div className='flex flex-col p-4'>
            <div className='flex'>
                <span className='w-28'>Modele :</span>
                <span >Dorian</span>
    
            </div>
            
            <div className='flex'>
                <span className='w-28'>Fake :</span>
                <span >Malade imaginaire</span>
    
            </div>
    
            <div className='flex  '>
                <span className='w-28'>Artiste :</span>
                <span >Leyna Aristo</span>
    
            </div>
            </div>  
    
            
            </div>
            </>)
}