import img from '../assets/imgTest.jpg'

export default function ProductDescription(){
    return (<>
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
            </>)
}