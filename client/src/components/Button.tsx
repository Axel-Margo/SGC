import { MouseEventHandler } from "react"

type ButtonProps = {
    primary: boolean
    buttonText: string
    link: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const buttonStyles = {
    primary: 'p-4 border-2 border-black  w-full bg-black text-white hover:bg-white hover:text-black hover:border-black',
    secondary: 'p-4 border-2 border-black w-full bg-white text-black hover:bg-black hover:text-white',
    
  };

 

export default function Button({primary, buttonText, link, onClick }: ButtonProps ){ return (
        <>  
      
        
           {primary ? 
                <button  className={primary ? buttonStyles.primary: ""} onClick={onClick}> 
                    <a href={link}>
                        {buttonText}
                    </a>
                </button> 
                : 
                <button className={buttonStyles.secondary} onClick={onClick} >
                    <a href={link}>
                        {buttonText}
                    </a>
                </button> } 
         
        
        </>
    )

}