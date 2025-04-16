import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCartActions } from "../tools/hooks/userCartActions";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Link } from "react-router-dom";

export default function CartSidebar() {
    const [viewCart, setViewCart] = useState(false);
    const cart = useSelector((state: RootState) => state.cart);
    const { handleRemoveFromCart, handleCleanCart } = useCartActions();


    return (
        <>
            <button className="bg-neutral-300 rounded-2xl p-4 relative" onClick={() => setViewCart(true)}>
                <FaCartShopping className="size-6" />
                {cart.items.length > 0 && (
                    <div className="absolute -top-2 -right-2 bg-red-500/70 text-white text-xs rounded-full px-2 py-1">
                        {cart.items.length}
                    </div>
                )}
            </button>

            {viewCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setViewCart(false)} />
            )}

            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: viewCart ? 0 : "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed right-0 top-0 h-full w-3/12 bg-white shadow-lg z-50 p-4 flex flex-col overflow-auto"
            >
                <div className="w-full flex justify-end">
                    <button
                        className="text-lg font-bold text-gray-500 hover:bg-purple-400/40 text-center mb-4 p-2 rounded-md"
                        onClick={() => setViewCart(false)}
                    >
                        ✖
                    </button>
                </div>

                {cart.items.length === 0 ? (
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-center">Votre panier est vide.</h2>
                        <p className="text-gray-600 text-center">Ajoutez des articles à votre panier.</p>
                    </div>

                ) : (
                    <>
                        <h1 className="font-semibold">Vos articles :</h1>
                        {cart.items.map((item) => (
                            <div className="bg-neutral-300/40 p-4 rounded-md mt-2" key={item.id}>
                                <div className="flex gap-2">
                                    <img src={item.picture[0].link} className="w-14 rounded-md" alt={item.name} />

                                    <div className="w-full">
                                        <h1 className="font-medium">{item.name}</h1>
                                        <p className="text-xs text-purple-400/70">{item.category_id[0].name}</p>
                                        
                                        <div className="flex flex-row justify-between items-center mt-2">
                                            <p className="text-xs font-medium">{item.price}€ </p>
                                            <button
                                                className="bg-purple-400/40 px-4 text-xs rounded-sm hover:bg-purple-500/40"
                                                onClick={() => handleRemoveFromCart(item)}
                                            >
                                                Retirer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="w-full flex flex-row mt-4 text-center justify-around gap-2">
                        <p className="   text-xl font-medium">
                            Coût total: <span className="text-purple-500">{cart.totalAmount}€</span>
                        </p>
                        <Link to="/cart-page" className=" rounded-sm text-xl font-medium underline decoration-purple-400 underline-offset-2">
                            Procéder au paiement
                        </Link>
                        </div>
                        <button className="w-full mt-10 p-4 bg-purple-500/80" onClick={() => handleCleanCart()}> Nettoyer le panier </button>
                    </>
                )}
            </motion.div>
        </>
    );
}
