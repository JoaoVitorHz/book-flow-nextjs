

'use client'

import { api } from "@/service/api";
import { useRouter } from "next/navigation"
import { useState } from "react"

import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

import Input from "@/components/Input";

const RegisterFormSchema = z.object({
    email: z.string({ required_error: "Email é obrigatorio"}).email('Email inválido'),
    password: z.string({ required_error: "Senha é obrigatorio"}), 
})

export default function SingIn(){
    const router = useRouter()
    const { control, handleSubmit } = useForm({resolver: zodResolver(RegisterFormSchema)});

    const [isError, setIsError] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMenssage, setErrorMenssage] = useState('');


    async function HandleCreateProfession(data){
        try{
            const response = await api.post('user/login', {
                ...data
            })
            if(response.data.id){
                localStorage.setItem('userId', response.data.id)
                setIsError(false)
                setShowError(true)
                setErrorMenssage('Login feito com sucesso')
                router.push('/pages')
            }
        } catch(error){
            if(error){
                setIsError(true)
                setErrorMenssage(error.response.data.errors)
                setShowError(true)

                setTimeout(() => {
                    setErrorMenssage('')
                    setShowError(false)
                }, 5000)
            }
        }
    }

    return(
        <section className="w-screen h-screen flex justify-center items-center">
            
            <form 
                className="min-w-[500px] rounded-md border border-gray-100/20 p-5 flex flex-col gap-5"
                onSubmit={handleSubmit(HandleCreateProfession)}
                > 
                <div className="w-full ">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <span className="text-sm text-white">Digite seu email e senha para fazer login</span>
                </div>
                {showError &&
                    <div className={`w-full p-2 flex justify-center text-white rounded ${isError ? 'bg-red-600' : 'bg-green-600'}`}>
                        {errorMenssage}
                    </div>
                }
                <div className="w-full flex flex-col gap-5">
                    <div className="flex flex-col ">
                        <Input 
                            control={control}
                            name="email"
                            inputTitle="E-mail"
                        />
                        <Input 
                            control={control}
                            name="password"
                            inputTitle="Senha"
                        />
                    </div>
                </div>
                
                <div className="w-full flex justify-center ">
                    <button className=" w-full bg-white text-black px-5 py-2 rounded pointer">Fazer Login</button>
                </div>

                <div className="w-full flex flex-col items-center">
                    <span className="text-xs mb-3 uppercase font-semibold">Ou crie uma conta</span>
                    <button 
                        className="w-full bg-black border border-gray-500 px-5 py-2 rounded pointer"
                        onClick={() => router.push('/auth/sing-up')}
                    >
                        Criar Conta
                    </button>
                </div>
            </form>
            
        </section>
    )
}