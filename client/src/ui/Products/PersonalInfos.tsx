import { useForm } from "react-hook-form"
import { UserInfosData } from "../../types/Form"
import Form from "../Login/Form"
import { userInfosSchema } from "../../../../shared/lib/schemas/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export default function PersonalInfos(){
    const { register } = useForm<UserInfosData>({
      resolver: zodResolver(userInfosSchema)
    })
    
    const fields = [
        {
      type: "text",
      placeholder: "Prénom",
      name: "name",
      register: register,
      
        }, 
        {
      type: "text",
      placeholder: "Nom",
      name: "surname",
      register: register,
      },
      {
        type: "email",
        placeholder: "Adresse mail",
        name: "email",
        register: register,
        },
        {
          type: "number",
          placeholder: "Numéro de rue",
          name: "street-number",
          register  : register,
            },
      {
      type: "text",
      placeholder: "Rue",
      name: "street",
      register  : register,
        },
        {
            type: "text",
            placeholder: "Ville",
            name: "city",
            register  : register,
              },
      
        {
            type: "tel",
            placeholder: "N. de téléphone",
            name: "phone-number",
            register: register,
              },
    
      ] 
    const onSubmit = async (data: UserInfosData) => {
      try { const response = await fetch('http://localhost:4200/users/orders', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      if (!response.ok) console.log("Failed")
      }

    catch(e) {
      console.log(e)
    } }
    
    return (
        <div className="flex justify-center h-full bg-slate-500  w-full">
            <Form fields={fields} secondaryDisplay={true} buttonText='Soumettre' onSubmit={onSubmit} schema={userInfosSchema} />
        </div>
    )
}