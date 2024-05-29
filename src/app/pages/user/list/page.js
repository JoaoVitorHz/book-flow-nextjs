'use client'

import { api } from "@/service/api";
import { useEffect, useState } from "react";

import ListUsers from "@/components/user/list/list-user";

export default function ListUser(){

    const [dataUser, setDataUser] = useState([]);

    async function GetAllUser(){
        const response = await api.get('user/getAll')
        setDataUser(response.data)
    }

    async function DeleteUser(userId){
        await api.delete('user/' + userId)
        GetAllUser();
    }

    function FilterUser(userName){
        setDataUser( dataUser.filter(user => patient.name.includes(userName) ))
    }

    useEffect(() => {
        GetAllUser();
    }, [])

    return(
        <section className="w-screen h-screen flex flex-col gap-20 justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-green-400">Usuarios Cadastrados</h1>
                <span>Abaixo temos uma lista com todos os usuario cadastrados no sistema</span>
            </div>
            <div className="border border-gray-200 p-5 rounded-md">
                <ListUsers
                    deleteUser={(userID) => DeleteUser(userID)}
                    dataUser={dataUser}
                />
            </div>
        </section>
        )
}