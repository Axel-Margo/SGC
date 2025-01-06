import { IoMdMenu } from "react-icons/io";


export default function Navbar(){
    return (
        <>
                            <div className="w-full">
                    <ul className="p-4 flex flex-row justify-between mt-1 ">
                                <li><a href='/'>
                                        <h1 className="text-2xl  text-purple-500 ">SGC</h1>
                                        </a>
                                </li>
                                        
                                <li>
                                    <IoMdMenu className="text-2xl mt-2" />
                                </li>
                    </ul>
                    </div>
                    <div className="w-full h-1 bg-neutral-200">

                    </div>
        </>
    )
}