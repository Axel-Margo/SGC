import { ProductsData } from "../../types/Products";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../state/cartSlice";
import { AppDispatch } from "../../state/store";

export const useCartActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    const handleAddToCart = (product: ProductsData) => {
            dispatch(addToCart(product))    
        
          }
    const handleRemoveFromCart = (product: ProductsData) => {
        dispatch(removeFromCart(product))
    }

    return { handleAddToCart, handleRemoveFromCart }
}