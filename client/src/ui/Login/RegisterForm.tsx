import { useForm } from 'react-hook-form'
import { userSchema } from '../../schemas/userSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormField } from './FormFields'
import { UserFormData } from '../../lib/types/Form'




export default function RegisterForm(){
const { handleSubmit, register, formState: {errors} } = useForm<UserFormData>({
  resolver: zodResolver(userSchema)
})



const onSubmit = async (data: UserFormData) => {

try { const response = await fetch('http://localhost:4200/users', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
  

})
if (!response.ok){
  throw new Error (`Erreur HTTP: ${response.status}`)
}

}
catch (e) {
  console.log(e)
}
}

return (
  <div className="w-full h-full  flex flex-col">
    <div className="m-auto bg-neutral-600 p-60 ">
    <h1 className="justify-center mb-8 text-3xl">S'enregistrer</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="">
    <div className='flex flex-col gap-2 justify-start '> 
<FormField error={errors.name}  name="name" placeholder="Nom d'utilisateur" register={register} type='text' />
    
    
<FormField error={errors.email}  name="email" placeholder="Email" register={register} type='text' />
    
<FormField error={errors.password}  name="password" placeholder="Mot de passe" register={register} type='password' />
    
<FormField error={errors.confirmPassword}  name="confirmPassword" placeholder="Confirmer le mot de passe" register={register} type='password' />
    
</div>

<button type="submit" className="p-2 bg-white mt-2 w-full">
            Submit
          </button>
    

    </form>
    
    </div>
  </div>
);
}; 
