import { FaArrowRight } from "react-icons/fa";

export default function HeroText() {
   return ( 
            <>
                <div className="relative top-96 mt-10   p-4 bg-black/80 md:bg-transparent md:w-4/6  ">
                <div className="mt-8 ">
                    <p className="text-neutral-500 font-light">méticulosité, rigueur et créativité</p>
                    <p className="text-2xl xl:text-4xl  text-white font-light"> Sgs fait toutes ses créations à la main et uniquement à la main !</p>
                </div>
                    <div className="mt-10 xl:mt-24">
                    <a href="#" className="flex flex-row justify-between  lg:justify-start bg-neutral-500/80 lg:bg-transparent lg:p-0 p-4 xl:text-2xl "> 
                        
                         <p className="text-white font-semibold ">Découvrir l'histoire de SGC </p>
                        <FaArrowRight className="text-white mt-1 lg:ml-4" /></a>
                        
                    </div>
                </div> 
            </>
) }