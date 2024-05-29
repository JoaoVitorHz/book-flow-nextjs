'use client'

import ListBooks from "@/components/book/list/list-book";
import { api } from "@/service/api";
import { useEffect, useState } from "react";


export default function ListBook(){

    const [dataBook, setDataBook] = useState([]);

    async function GetAllBook(){
        const response = await api.get('book/getAll')
        setDataBook(response.data)
    }

    async function DeleteBook(bookId){
        await api.delete('book/' + bookId)
        GetAllBook();
    }

    function FilterBook(bookName){
        setDataBook( dataBook.filter(book => book.name.includes(bookName) ))
    }

    useEffect(() => {
        GetAllBook();
    }, [])

    return(
        <section className="w-screen h-screen flex flex-col gap-20 justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-green-400">Livros Cadastrados</h1>
                <span>Abaixo temos uma lista com todos os livros cadastrados no sistema</span>
            </div>
            <div className="border border-gray-200 p-5 rounded-md">
                <ListBooks
                    deleteBook={(bookID) => DeleteBook(bookID)}
                    dataBook={dataBook}
                />
            </div>
        </section>
        )
}