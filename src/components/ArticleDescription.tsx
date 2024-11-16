
import Button from './Button'
import SecurityAndDeliveries from '../ui/SecurityAndDeliveries'
import ProductDescription from '../ui/ProductDescription'
import { ButtonPurpose } from '../tools/dictionnary'


export default function ArticleDescription(){
    return(<>
    <div className='mx-6 mt-6'>
    <ProductDescription />
        <div>
            <p className='mt-8 text-black/50'>Vous n'avez pas enregistré cet article dans votre Articles likés</p>
        </div>
       <SecurityAndDeliveries />
            <div className='mt-14 flex flex-col gap-4 mb-4'>
            <Button primary={false} buttonText={ButtonPurpose.addToCartThenAccessCart} link='#' onClick='{handleClick}'/>
            <Button primary={true} buttonText={ButtonPurpose.pay} link='product/personal-infos' onClick='{handleClick}'/>
            </div>

        
            </div>
    </>
        )

        
}