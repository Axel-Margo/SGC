import { IoBag } from "react-icons/io5";

import ArticleImg from "../ui/ArticlesImg";

export default function Article(){

    const articleName = "Jupe Burberry" 
    
    return (
        <a href='/product'>
            <div className="mt-1">
            <ArticleImg />
                <div id="INFO CONTAINER " >
                    <div className="flex justify-between">
                        <h3 id="description" className="w-28">{articleName}</h3>
                        <span id="prix" className="font-bold">45€</span>
                    </div>
                    <div className="">
                        <a href="#" className="flex flex-row mt-8">
                            <p>Ajouter au panier</p>
                            <IoBag className="mt-1 ml-4" />

                        </a>
                    </div>
                </div>
            </div>
        </a>)
}