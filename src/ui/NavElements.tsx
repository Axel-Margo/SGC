interface NavbarProps {
    fullItems: boolean
}

interface NavLinks {
    name: string,
    link: string,
   
}

export default function NavElements({ fullItems }: NavbarProps){
   
    const navItems: NavLinks[] = [
        {
            name: 'Shop',
            link: '/shop',
        } ,
        {
            name: 'Forum',
            link: '/',
        } ,
        {
            name: 'Homme',
            link: '/',
        } ,
        {
            name: 'Femme',
            link: '/',
        } ,
        {
            name: 'Enfant',
            link: '/'
        } 
        
    ]

    const wholeNavItems: JSX.Element[] = navItems.map(e =><a href={e.link}> <li key={e.name} className="text-neutral-500 text-xl font-thin">{e.name}</li></a>)

    const sliceItems = navItems.slice(0, 2)
    const slicedNavItems: JSX.Element[] = sliceItems.map(e =><a href={e.link}> <li key={e.name} className="mx-4 text-neutral-500 text-xl font-thin">{e.name}</li></a>)
    
    
    return ( <ul className="flex flex-row relative">
        {fullItems ? wholeNavItems  : slicedNavItems}
     </ul> )
}