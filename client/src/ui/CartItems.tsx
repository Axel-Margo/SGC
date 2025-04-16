import { useSelector } from "react-redux"
import { RootState } from "../state/store"
import { ProductsData } from "../types/Products"
import { useCartActions } from "../tools/hooks/userCartActions"

export default function CartItems(){
    const items = useSelector((state: RootState) => state.cart.items)
    const { handleRemoveFromCart } = useCartActions()
    return (
<>


{items.map((item) => (
                                 <div className="mt-2 bg-neutral-300/40 p-4 rounded-md  w-full" key={item.id}>
                                <div className="flex gap-2">
                                    <img src={item.picture[0].link} className="w-32 rounded-md" alt={item.name} />

                                    <div className="w-full">
                                        <h1 className="text-2xl">{item.name}</h1>
                                        <p className="text-lg text-purple-400/70">{item.category_id[0].name}</p>
                                        
                                            <p className="text-lg font-medium">{item.price}€ </p>
                                        <div className="flex flex-row justify-between items-center mt-10">
                                        <a href={`/products/${item.id}`}><button className="hover:bg-neutral-700/70 bg-neutral-500/70 px-4 py-2 text-lg rounded-sm"> Aller à la page produit </button></a>
                                        
                                            <button
                                                className="bg-purple-400/40 px-4 py-2 text-lg rounded-sm hover:bg-purple-500/40"
                                                onClick={() => handleRemoveFromCart(item)}
                                            >
                                                Retirer
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
   


</>)}