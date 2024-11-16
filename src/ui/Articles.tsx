import Article from "../components/ArticleShowcase"
import Label from "../ui/Label"
export default function Articles(){
    return (
        <div className="mx-6">
            <Label />
            <div className="grid grid-cols-2 gap-4" >
            
                <Article />
                <Article />
            </div>
        </div>
    )
}