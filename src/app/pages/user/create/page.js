'use client'

import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from "@/service/api"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Input from "@/components/Input";

const RegisterFormSchema = z.object({
    name: z.string({ required_error: "Nome é obrigatorio"}).min(3, 'O nome deve conter pelo menos 3 letras').regex(/^\D+$/,'O nome não pode conter números' ),
    last_name: z.string({ required_error: "Sobrenome é obrigatorio"}).min(3, 'O sobrenome deve conter pelo menos 3 letras').regex(/^\D+$/,'O sobrenome não pode conter números' ),
    email: z.string({ required_error: "Email é obrigatorio"}).email('Email invalido'),
    password: z.string({ required_error: "Senha é obrigatorio"}).min(6, 'Senha deve ter pelo menos 6 caracteres'),
    phone: z.string({ required_error: "Celular do paciente é obrigatorio"}).min(11, 'O telefone celular deve ter no mínimo 11 dígitos.'),
    cpf: z.string().min(11, 'O CPF deve ter no mínimo 11 dígitos.'),
})

export default function CreateUser(props){
    const { register, control, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(RegisterFormSchema)});
    const router = useRouter()

    const [isSingUpError, setIsSingUpError] = useState(false)
    const [showCardError, setShowCardError] = useState(false)
    const [mensageStatusSingUp, setMensageStatus] = useState('');

    async function CreateUser(data){
        console.log(data)
        try{
            const response = await api.post('user/create', {
                ...data, user_type: 1
            })
            if(response.data.id){
                setIsSingUpError(false)
                setMensageStatus('Conta criada com sucesso!')
                setShowCardError(true)
               
            }
       
        } catch(error){
            if(error){
                setIsSingUpError(true)
                setMensageStatus(error.response.data.errors)
                setShowCardError(true)

                setTimeout(() => {
                    setMensageStatus('')
                    setShowCardError(false)
                }, 5000)
            }
        }
    }

    return(
        <section className="w-screen h-screen flex justify-center items-center">
            <form 
                className="min-w-[500px] rounded-md border border-gray-100/20 p-5 flex flex-col gap-5"
                onSubmit={handleSubmit(CreateUser)}
            > 
                <div className="w-full ">
                    <h1 className="text-2xl font-bold">Criar usuario</h1>
                    <span className="text-sm text-white">Insira os dadso abaixo para criar um usuario</span>
                </div>
                {showCardError &&
                    <div className={`w-full flex justify-center p-3 rounded text-white ${isSingUpError ? 'bg-red-600 ': 'bg-green-600'}`}>
                        <span>{mensageStatusSingUp}</span>
                    </div>
                }
                <div className="w-full flex flex-col gap-5">
                    <Input 
                        control={control}
                        name="name"
                        inputTitle="Nome"
                    />
                    <Input 
                        control={control}
                        name="last_name"
                        inputTitle="Sobrenome"
                    />
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
                    <Input 
                        control={control}
                        name="phone"
                        inputTitle="Telefone"
                        mask="(99) 99999-9999"
                    />
                    <Input 
                        control={control}
                        name="cpf"
                        mask="999.999.999-99"
                        inputTitle="cpf"
                    />
                </div>
                
                <div className="w-full flex justify-center ">
                    <button className=" w-full bg-white text-black px-5 py-2 rounded pointer">Criar conta</button>
                </div>
            </form>
        </section>
    )
}