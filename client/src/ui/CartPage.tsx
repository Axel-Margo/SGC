import Navbar from "../components/Navbar";
import CartItems from "./CartItems";
import PaymentInfos from "./PaymentInfos";
import Label from "./Products/Label";

export default function CartPage(){
    return (
        <>

    <Navbar />
    <div className=" mx-40 h-full  flex flex-row  ">
        <div className="w-full  ">
            <Label text="Votre panier" />
                <div className="flex flex-row  ">
                    <div className=" flex flex-col w-1/2 overflow-auto ">
                        <CartItems />
                    </div>
                    <div className="mt-2 ml-2 w-1/2 overflow-auto ">
                        <PaymentInfos />
                    </div>
                </div>
        </div>
    </div>
        </>
    )
}