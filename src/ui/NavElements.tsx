interface NavbarProps {
    fullItems: boolean
}

export default function NavElements({ fullItems }: NavbarProps){
    const navItems: string[] = [
         
        'Shop', 
        'Forum', 
        'Homme', 
        'Femme', 
        'Enfant'
    ]

    const wholeNavItems: JSX.Element[] = navItems.map(e => <li key={e} className="text-neutral-500 text-xl font-thin">{e}</li>)

    const slicedItems: string[] = [] = navItems.slice(0, 2)
    const slicedNavItems: JSX.Element[] = slicedItems.map(e => <li key={e} className="mx-4 text-neutral-500 text-xl font-thin">{e}</li>)
    
    
    return ( <ul className="flex flex-row relative">
        {fullItems ? wholeNavItems  : slicedNavItems}
     </ul> )
}