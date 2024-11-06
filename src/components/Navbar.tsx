import NavElements from "../ui/NavElements"

export default function Navbar(){
   
        return (
            <>
                <div className="w-full">
                    <ul className="p-4 flex flex-row justify-between mt-4 ">
                             <li>
                                    <h1 className="text-2xl active text-white ">SGC</h1>
                            </li>
                            <NavElements fullItems={false} />                 
                    </ul>
                </div>
                
            </> )
}