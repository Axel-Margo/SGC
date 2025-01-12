import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Sidebar from "../ui/Sidebar";


export default function Navbar(){

    const [visibility, setVisibility] = useState(false);

    return (
        <>
                <div className="w-full bg-neutral-200 top-0">
                    <ul className="p-4 flex flex-row justify-between   ">
                        <li>    
                            <a href='/'>
                                <h1 className="text-2xl  text-purple-500 ">SGC</h1>
                            </a>
                        </li>
                                        
                        <li>
                            <IoMdMenu className="text-2xl mt-2 mobile-only" onClick={() => setVisibility(!visibility)}/>
                        </li>
                            {visibility ? <Sidebar /> : null}
                    </ul>
                    <div className="w-full h-1  z-20">
                    </div>
                </div>
    </>
    )
}