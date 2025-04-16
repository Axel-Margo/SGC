import { useSelector } from "react-redux";
import Button from "../components/Button";
import { ButtonPurpose } from "../tools/dictionnary";
import { RootState } from "../state/store";

export default function PaymentInfos() {

    const cart = useSelector((state: RootState) => state.cart)

    return (
        <>
        <div className="w-2/3 bg-neutral-50 border-x-black border-2  p-10">
        <h2 className="text-3xl">Total</h2>
        <div className="border-x-zinc-200 border-b-2 mt-4"></div>
        <h3 className="text-2xl mt-24">Sous-Total:</h3>
        <p className="text-4xl">{cart.totalAmount} €</p>


        <div className="mt-4 w-1/2">
        <Button primary={true} buttonText={ButtonPurpose.pay} link='/personal-infos' />
        </div>       
    

        </div>
        </>
    )
}