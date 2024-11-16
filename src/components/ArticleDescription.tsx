import img from '../assets/imgTest.jpg'
import Button from './Button'



export default function ArticleDescription(){
    return(<>
    <div className='mx-6 mt-6'>
    <div className=' bg-red-300 flex justify-center items-center'>
            <img src={img} className=' ' />
    </div>        
    <div className='' id='info-product'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-2xl'>Jupe Burberry</h1>
                    <a href='#'>LIKE</a></div>
                </div>
            <span className='text-black/50'>Catégorie Jupes Femme</span>
            <div className='mt-5 '>
            <span className='font-bold text-xl'>48€</span>
            </div>
        
            <div className=' bg-purple-300/40 mt-14'>
                <div className='p-4'>
        <div className='flex  '>
            <span className='w-28'>Modele :</span>
            <span >Dorian</span>

        </div>
        
        <div className='flex  '>
            <span className='w-28'>Fake :</span>
            <span >Malade imaginarie</span>

        </div>

        <div className='flex  '>
            <span className='w-28'>Artiste :</span>
            <span >Leyna Aristo</span>

        </div>
        </div>  

        </div>
        <div>
            <p className='mt-8 text-black/50'>Vous n'avez pas enregistré cet article dans votre Articles likés</p>
        </div>
        <div className=' mt-14'>
            <div className='flex flex-row'>
            <span className='w-28'>CAMION</span>
            <p>Retours et livraisons gratuites</p>

            </div>
            <div className='flex flex-row'>
            <span className='w-28'>CADENAS</span>
            <p>Paiements sécurisés</p>
            </div>
            <div className='mt-14 flex flex-col gap-4 mb-4'>
            <Button primary={false} buttonText='Ajouter et accéder au panier' link='#' onClick='{handleClick}'/>
            <Button primary={true} buttonText='Procéder au paiement' link='#' onClick='{handleClick}'/>
            </div>

        </div>
    </div>
    
    </>
        )
}