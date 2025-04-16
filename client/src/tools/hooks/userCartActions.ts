import { ProductsData } from "../../types/Products";
import { useDispatch } from "react-redux";
import { addToCart, cleanCart, removeFromCart,  } from "../../state/cartSlice";
import { AppDispatch } from "../../state/store";

export const useCartActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    const handleAddToCart = (product: ProductsData) => {
            dispatch(addToCart(product))    
         }
    
    const handleRemoveFromCart = (product: ProductsData) => {
        dispatch(removeFromCart(product))
    }

    const handleCleanCart = () => {
        dispatch(cleanCart())
    }

    return { handleAddToCart, handleRemoveFromCart, handleCleanCart }
}