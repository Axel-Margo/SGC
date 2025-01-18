import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '../../../../shared/lib/schemas/userSchema.ts'
import { UserFormData } from '../../types/Form.ts'
import Form from './Form'




export default function RegisterForm(){
const { register } = useForm<UserFormData>({
  resolver: zodResolver(userSchema)
})



const onSubmit = async (data: UserFormData) => {

try { const response = await fetch('http://localhost:4200/users/register', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})

console.log(response.status);

if (!response.ok){
  throw new Error (`Erreur HTTP: ${response.status}`)
}

}
catch (e) {
  console.log(e)
}
}
const fields = [
  {
type: "text",
placeholder: "Utilisateur",
name: "name",
register: register,

  }, 
  {
type: "text",
placeholder: "Email",
name: "email",
register: register,
},
{
type: "password",
placeholder: "Mot de passe",
name: "password",
register  : register,
  },
{
type: "password",
placeholder: "Confirmez votre mot de passe",
name: "confirmPassword",
register  : register,
  },
]
return (

  <div className="w-full h-full  flex flex-col">
    <div className="m-auto bg-neutral-600 p-60 ">
    <h1 className="justify-center mb-8 text-3xl"> <a href="/"> S'enregistrer </a></h1>
    
    <Form fields={fields} linkHref='/login' buttonText="S'enregistrer" linkText="J'ai déjà un compte" onSubmit={onSubmit} schema={userSchema} />
    </div>
  </div>
);
}; 
