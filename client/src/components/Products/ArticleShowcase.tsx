
import ArticleImg from "../../ui/Products/ArticlesImg";

export default function Article(){

    const articleName = "Jupe Burberry" 
    
    return (
        <a href='/product'>
            <div className="mt-1">
            <ArticleImg />
                <div id="INFO CONTAINER " >
                    <div className="flex justify-between mt-2">
                        <h3 id="description" className="w-28">{articleName}</h3>
                        <span id="prix" className="font-bold">45€</span>
                    </div>
                    <div className="">
                        <a href="#" className="flex flex-row mt-6">
                            <p>Ajouter au panier</p>

                        </a>
                    </div>
                </div>
            </div>
        </a>)
}