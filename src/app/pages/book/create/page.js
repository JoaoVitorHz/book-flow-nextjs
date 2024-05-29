'use client'

import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from "@/service/api"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Input from "@/components/Input";

const RegisterFormSchema = z.object({
    title: z.string({ required_error: "titulo é obrigatorio"}).min(3, 'O titulo do livro deve conter pelo menos 3 letras'),
    synopsis: z.string({ required_error: "Sinopose é obrigatorio"}).min(3, 'A sinopse deve conter pelo menos 3 letras'),
    author: z.string({ required_error: "Autor é obrigatorio"}).min(3, 'A sinopse deve conter pelo menos 3 letras'),
    publisher: z.string({ required_error: "Editora é obrigatorio"}).min(3, 'A editora deve ter pelo menos 6 caracteres'),
    price: z.string({ required_error: "Preço é obrigatorio"}),
})

export default function CreateBook(props){
    const { register, control, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(RegisterFormSchema)});
    const router = useRouter()

    const [isSingUpError, setIsSingUpError] = useState(false)
    const [showCardError, setShowCardError] = useState(false)
    const [mensageStatusSingUp, setMensageStatus] = useState('');

    async function CreateBook(data){
        console.log(data)
        try{
            const response = await api.post('book/create', {
                ...data
            })
            if(response.data.id){
                setIsSingUpError(false)
                setMensageStatus('Livro criado com sucesso!')
                setShowCardError(true)
                router.push('/pages/book/list')
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
                onSubmit={handleSubmit(CreateBook)}
            > 
                <div className="w-full ">
                    <h1 className="text-2xl text-green-400 font-bold">Criar Livro</h1>
                    <span className="text-sm text-white">Insira os dados abaixo para criar um livro</span>
                </div>
                {showCardError &&
                    <div className={`w-full flex justify-center p-3 rounded text-white ${isSingUpError ? 'bg-red-600 ': 'bg-green-600'}`}>
                        <span>{mensageStatusSingUp}</span>
                    </div>
                }
                <div className="w-full flex flex-col gap-5">
                    <Input 
                        control={control}
                        name="title"
                        inputTitle="Titulo"
                    />
                    <Input 
                        control={control}
                        name="synopsis"
                        inputTitle="Sinopse"
                    />
                    <Input 
                        control={control}
                        name="author"
                        inputTitle="Autor"
                    />
                    <Input 
                        control={control}
                        name="publisher"
                        inputTitle="Editora"
                    />
                    <Input 
                        control={control}
                        name="price"
                        inputTitle="Preço"
                    />
                </div>
                
                <div className="w-full flex justify-center ">
                    <button className=" w-full bg-white text-black px-5 py-2 rounded pointer hover:bg-green-200 transition-[300ms]">Criar livro</button>
                </div>
            </form>
        </section>
    )
}