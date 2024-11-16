type ButtonProps = {
    primary: boolean
    buttonText: string
    link: string
    onClick: string
}

const buttonStyles = {
    primary: 'p-4 border-2 border-black  w-full bg-black text-white hover:bg-white hover:text-black hover:border-black',
    secondary: 'p-4 border-2 border-black w-full bg-white text-black hover:bg-black hover:text-white',
    
  };

 

export default function Button({primary, buttonText, link}: ButtonProps ){ return (
        <>  
      
        
           {primary ? 
                <button className={buttonStyles.primary}> 
                    <a href={link}>
                        {buttonText}
                    </a>
                </button> 
                : 
                <button className={buttonStyles.secondary} >
                    <a href={link}>
                        {buttonText}
                    </a>
                </button> } 
         
        
        </>
    )

}