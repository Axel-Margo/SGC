import { useEffect, useState } from "react"
import Label from "./Label"
import { ProductsData } from "../../types/Products"
import { IoBag } from "react-icons/io5";



export default function Articles() {
  const [data, setData] = useState<ProductsData[] | null>();

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
          <div>
            <a href={`/products/${productData.id}`}>
              <div key={productData.name} className="mt-1 ">

                <img src={productData.picture[0].link} />
                <div className="flex flex-col max-h-20 min-h-20">
                            <h3 id="description" className="w-60 font-medium">{productData.name}</h3>
                        <span className="text-xs text-purple-400/70">Catégorie {productData.category_id[0].name}</span>
                        </div>
                        <div className="">
                        <span id="prix" className="font-bold">{productData.price}€</span>

                                <p className="flex flex-row ">
                                    Ajouter au panier 
                                    <IoBag className="mt-1 ml-4" />
                                </p>

                        </div>
              </div>
            </a>
        </div>
          );
        })}
      </div>
    </div>
  );
}
