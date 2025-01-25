import NavElements from "../ui/NavElements"

export default function HomeNavbar(){
   
        return (
            <>
                <div className="w-full">
                    <ul className="p-4 flex flex-row justify-between mt-1 ">
                             <li>
                                    <h1 className="text-2xl active text-white lg:text-3xl ">SGC</h1>
                            </li>
                            <NavElements fullItems={false} />                 
                    </ul>
                </div>
                
            </> )
}