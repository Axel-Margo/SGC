import { useEffect, useState } from "react"
import Label from "./Label"
import { ProductsData } from "../../types/Products"
import { IoBag } from "react-icons/io5";
import { useCartActions } from "../../tools/hooks/userCartActions";



export default function Articles() {
  const [data, setData] = useState<ProductsData[] | null>();
  const { handleAddToCart } = useCartActions()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetch('http://localhost:4200/products');

        if (!products.ok) {
          throw new Error(`Erreur HTTP: ${products.status}`);
        }

        const result = await products.json();
        console.log(result)
        setData(result);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProducts();
  }, []);

  if (!data) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="">
      <Label />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {data.map((productData: ProductsData) => {
          return (
          <div key={productData.name}>
              <div  className="mt-1 ">
            <a href={`/products/${productData.id}`}>
            
                <img src={productData.picture[0].link} />
            </a>
              
              <div  className="border border-black flex justify-between flex-col">
                <div className="flex flex-col max-h-20 min-h-20 ">
                            <h3 id="description" className="w-60 font-medium">{productData.name}</h3>
                        <span className="text-xs text-purple-400/70">Catégorie {productData.category_id[0].name}</span>
                        </div>
                        <div className="">
                        <span id="prix" className="font-bold">{productData.price}€</span>

                                <p className="flex flex-row justify-between  ">
                                    Accéder à la page produit
                                    <button onClick={() => handleAddToCart(productData)} className="z-10 p-2 mb-2 rounded-md bg-slate-400 flex items-center justify-center hover:bg-slate-500">
                                      <IoBag  /> 
                                    </button>
                                </p>

                        </div>
                        </div>
              </div>
        </div>
          );
        })}
      </div>
    </div>
  );
}
