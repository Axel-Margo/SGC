import { useState } from "react";
import Button from "../../components/Button";

export default function RegisterForm(){

const [email, setEmail] = useState<string>("")
const [username, setUsername] = useState<string>("")
const [password, setPassword] = useState<string>("")
const [errorMessage, setErrorMessage] = useState<string>("")


const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    const data = { email, password }

    try {

      const response = await fetch('http://localhost:4200/users', { 
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)
        })

        if (!response.ok) {
          setErrorMessage('Cet utilisateur a déjà un compte')
          throw new Error(`Erreur HTTP: ${response.status}`)
        }
    }
    catch(e) {
      console.log(e)
    }

}


    return (
        <div className="w-full h-full  flex flex-col">
          <div className="m-auto bg-neutral-600 p-20 ">
          <h1 className="justify-center mb-8 text-3xl">S'enregistrer</h1>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
              className="rounded-sm px-2"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
              </div>
              <div className="flex flex-col">

              <label htmlFor="username">Nom d'utilisateur:</label>
              <input
              className="rounded-sm px-2"
                type="text"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                required
              />
              </div>
              <div className="flex flex-col">

              <label htmlFor="password">Mot de passe:</label>
              <input
              className="rounded-sm px-2"
                type="password"
                id="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
              </div>

            </div>
            {errorMessage && <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>  }
            <div className="flex flex-row justify-between mt-4 gap-4">
            <button type="submit" className="bg-white p-2">Se connecter</button>
            <Button primary buttonText="Register Now" link="/register" onClick=""/>
            </div>
          </form>
          </div>
        </div>
      );
    }; 
