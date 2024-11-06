import { FaArrowRight } from "react-icons/fa";

export default function HeroText() {
   return ( 
            <>
                <div className="relative top-96 p-4 bg-black/80 ">
                <div className="mt-8">
                    <p className="text-neutral-500 font-light">méticulosité, rigueur et créativité</p>
                    <p className="text-2xl text-white font-normal"> Sgs fait toutes ses créations à la main et uniquement à la main !</p>
                </div>
                    <div className="mt-10">
                    <a href="#" className="flex flex-row justify-between bg-neutral-500/80 p-4"> <p className="text-white font-semibold">Découvrir l'histoire de SGC </p>
                    <FaArrowRight className="text-white mt-1" /></a>
                    </div>
                </div> 
            </>
) }