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

export default function UpdateBook({ params }, props){
    const router = useRouter()

    const [book, setbook] = useState([]);

    const [isSingUpError, setIsSingUpError] = useState(false)
    const [showCardError, setShowCardError] = useState(false)
    const [mensageStatusSingUp, setMensageStatus] = useState('');

    const { register, setValue, control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegisterFormSchema),
    });
   
    async function UpdateBook(data){
        console.log(data)
        try{
            const response = await api.put('book/update/' + params.id, {
                ...data
            })
            if(response.data.id){
                setIsSingUpError(false)
                setMensageStatus('Livro atualizado com sucesso!')
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

    async function GetBook(){
        let response = await api.get('book/' + params.id );
        setValue('title', response.data.title)
        setValue('synopsis', response.data.synopsis)
        setValue('author', response.data.author)
        setValue('publisher', response.data.publisher)
        setValue('price', response.data.price)
    }

    useEffect(() => {
        GetBook()
    }, [])

    return(
        <section className="w-screen h-screen flex justify-center items-center">
            <form 
                className="min-w-[500px] rounded-md border border-gray-100/20 p-5 flex flex-col gap-5"
                onSubmit={handleSubmit(UpdateBook)}
            > 
                <div className="w-full ">
                    <h1 className="text-2xl font-bold">Atualizar Livros</h1>
                    <span className="text-sm text-white">Insira os dados abaixo para atualizar um livro</span>
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
                    <button className=" w-full bg-white text-black px-5 py-2 rounded pointer">Atualizar Livro</button>
                </div>
            </form>
        </section>
    )
}