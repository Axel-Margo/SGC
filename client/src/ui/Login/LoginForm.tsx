import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { connectSchema, userSchema } from '../../../../shared/lib/schemas/userSchema.ts'
import { UserConnexionData } from '../../types/Form.ts'
import Form from './Form'
import { useNavigate } from 'react-router-dom'




export default function LoginForm(){
const { register } = useForm<UserConnexionData>({
  resolver: zodResolver(userSchema)
})

const navigate = useNavigate()


const onSubmit = async (data: UserConnexionData) => {
try { 
  const response = await fetch('http://localhost:4200/users/login', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: 'include',
  body: JSON.stringify(data)
  

})
const res = await response.json()
navigate('/shop');
console.log(res.message)

}



catch (e) {
  console.log(e)
}
}


const fields = [

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
  }

]
return (

  <div className="w-full h-full  flex flex-col">
    <div className="m-auto bg-neutral-200/70 rounded-md p-60 ">
    <h1 className="justify-center mb-8 text-3xl"> <a href="/"> Connexion </a></h1>
    
    <Form fields={fields} linkHref='/register' buttonText="Se connecter" linkText="Créer un compte" onSubmit={onSubmit} schema={connectSchema} />
    </div>
  </div>
);
}; 