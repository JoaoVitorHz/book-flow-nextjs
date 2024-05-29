import { MdMenuBook } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { LuFileBarChart2 } from "react-icons/lu";

export default function Menu(){
    return(
        <div className="min-w-[250px] h-screen border border-gray-200/20 p-5">
            <div className="flex gap-3 items-center mb-10">
                <MdMenuBook className="text-3xl text-green-400"/>
                <h1 className="font-bold">Book Flow</h1>
            </div>
            <div className="flex flex-col">
                <div className="
                    flex items-center gap-5 mb-4
                    after:content-[''] after:block after:flex-1 after:bg-gray-200/100 after:h-[1px]
                    before:content-[''] before:block before:flex-1 before:bg-gray-200/100 before:h-[1px]">
                    <span className=" text-sm ">Gerenciar Usuario</span>
                </div>
                <div className="flex gap-3 items-center hover:bg-gray-300/20 px-3 py-2 rounded-md cursor-pointer">
                    <FiUser  className="text-xl text-white"/>
                    <h1 className="text-gray-300">Ver Usuarios</h1>
                </div>
                <div className="flex gap-3 items-center hover:bg-gray-300/20 px-3 py-2 rounded-md cursor-pointer">
                    <FiUser  className="text-xl text-white"/>
                    <h1  className="text-gray-300">Criar Usuario</h1>
                </div>
                <div className="flex gap-3 items-center hover:bg-gray-300/20 px-3 py-2 rounded-md cursor-pointer">
                    <FiUser  className="text-xl text-white"/>
                    <h1  className="text-gray-300">Atualizar Usuario</h1>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="
                    flex items-center gap-5 mt-10 mb-5
                    after:content-[''] after:block after:flex-1 after:bg-gray-200/100 after:h-[1px]
                    before:content-[''] before:block before:flex-1 before:bg-gray-200/100 before:h-[1px]">
                    <span className=" text-sm ">Gerenciar Livros</span>
                </div>
                <div className="flex gap-3 items-center hover:bg-gray-300/20 px-3 py-2 rounded-md cursor-pointer">
                    <MdOutlineLibraryBooks   className="text-xl text-white"/>
                    <h1 className="text-gray-300">Ver Livros</h1>
                </div>
                <div className="flex gap-3 items-center hover:bg-gray-300/20 px-3 py-2 rounded-md cursor-pointer">
                    <MdOutlineLibraryBooks   className="text-xl text-white"/>
                    <h1  className="text-gray-300">Criar Livro</h1>
                </div>
                <div className="flex gap-3 items-center hover:bg-gray-300/20 px-3 py-2 rounded-md cursor-pointer">
                    <MdOutlineLibraryBooks   className="text-xl text-white"/>
                    <h1  className="text-gray-300">Atualizar Livro</h1>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="
                    flex items-center gap-5 mt-10 mb-5
                    after:content-[''] after:block after:flex-1 after:bg-gray-200/100 after:h-[1px]
                    before:content-[''] before:block before:flex-1 before:bg-gray-200/100 before:h-[1px]">
                    <span className=" text-sm ">Vendas</span>
                </div>
                <div className="flex gap-3 items-center hover:bg-gray-300/20 px-3 py-2 rounded-md cursor-pointer">
                    <LuFileBarChart2   className="text-xl text-white"/>
                    <h1 className="text-gray-300">Ver Vendas</h1>
                </div>
               
            </div>
        </div>
    )
}