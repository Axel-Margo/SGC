import { FormFieldProps  } from "../../lib/types/Form"

export const FormField: React.FC<FormFieldProps> = ({ type, placeholder, register, name, error }) => {
    return (
        <>
        <input type={type} placeholder={placeholder} {...register(name)} className="p-2 rounded-sm border-2 border-sky-200" />
        { error && <span className="text-sm text-red-400">{error.message}</span> }
        
        </>

    //     <div className="flex flex-col">

    //     <label htmlFor="username">Nom d'utilisateur:</label>
    //     <input
    //     className="rounded-sm px-2"
    //     {...register("username")}
    //     />
    //     </div>
    //     <div className="flex flex-col">

    //     <label htmlFor="password">Mot de passe:</label>
    //     <input
    //     className="rounded-sm px-2"
    //     {...register("password")}  
    //     />
    //     </div>

    //     <div className="flex flex-col">

    //     <label htmlFor="password">Confirmer le mot de passe:</label>
    //     <input
    //     className="rounded-sm px-2"
    //     {...register("confirmPassword")}  
    //     />
    //             </div>

    //   </div>
    //   <div className="flex flex-row justify-between mt-4 gap-4">
    //   <input type="submit" className="bg-white p-2" />            
    )
}
