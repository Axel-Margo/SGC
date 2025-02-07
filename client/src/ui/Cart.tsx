import { useSelector } from "react-redux"
import { RootState } from "../state/store"
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCartActions } from "../tools/hooks/userCartActions";

export default function Cart (){
    const cart = useSelector((state: RootState) => state.cart)
    const [ viewCart, setViewCart ] = useState(false)
    const { handleRemoveFromCart } = useCartActions()


        return (
            <>
            <button className="bg-neutral-300 rounded-2xl p-4" onClick={() => setViewCart(true)}>
            <FaCartShopping className="size-6" />
            <div className="absolute -translate-x-7 -translate-y-4 bg-red-500/70 rounded-3xl p-2 ">{cart.totalItems}</div>
            </button>
            

        
        {viewCart && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setViewCart(false)}
        ></div>
      )}
        <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: viewCart ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-3/12 bg-white shadow-lg z-50 p-4 flex flex-col overflow-auto "
      >
       <div className="w-full"> 
        <button 
          className="text-lg font-bold text-gray-500 hover:bg-purple-400/40 text-center mb-4 p-2 rounded-md " 
          onClick={() => setViewCart(false)}
        >
           ✖
        </button>
        </div>
        {   cart.items.length == 0 
            ?
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-center">Votre panier est vide. </h2>
                <p className="text-gray-600 text-center">Ajoutez des articles à votre panier.</p>
            </div> 
            : 
            <>
            <h1 className="font-semibold">Vos articles: </h1>
            {cart.items.map((item) => 
            <div className="bg-neutral-300/40 p-4 rounded-md mt-2" key={item.id}> 
                <div className="flex gap-2"> 
                    <img src={ item.picture[0].link }  className="w-14 rounded-md"/>
                <div className="w-full">
                    <h1 className="">
                        {item.name}
                    </h1>
                    <p className="text-xs text-purple-400/70">{item.category_id[0].name}</p>
                    <div className="flex flex-row justify-between">
                    <p className="text-xs mt-2 font-medium">{item.price}€</p>
                    <button className="bg-purple-400/40 px-4 text-xs rounded-sm" onClick={() => handleRemoveFromCart(item)}> retirer </button>
                    </div>
                </div>
                </div>
              
            </div>
              )}
                <p className="w-full text-center mt-4 text-xl font-medium">Coût total: {cart.totalAmount}€</p>

            </>
         }
        
        {
            
        }
        <p>
              </p>
      </motion.div>
              </>)
}