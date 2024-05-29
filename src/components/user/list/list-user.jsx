import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { IoPersonSharp } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";

import { useRouter } from "next/navigation";

export default function ListUsers(props){
    const router = useRouter();
    return(
        <Table className="rounded w-[100%] m-auto">
            <TableCaption>Uma listagem de usuarios.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead  className="text-center text-white">Nome</TableHead>
                    <TableHead  className="text-center text-white">Sobrenome</TableHead>
                    <TableHead  className="text-center text-white">Email</TableHead>
                    <TableHead  className="text-center text-white">Cpf</TableHead>
                    <TableHead  className="text-center text-white">Telefone</TableHead>
                    <TableHead  className="text-center text-white">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {props.dataUser?.map((user) => {
                return(
                    <TableRow key={user.id}>
                        <TableCell className="font-medium flex items-center gap-2 text-center">
                                <IoPersonSharp className="text-green-400"/>
                                <span>{user.name}</span>
                        </TableCell>
                        <TableCell  className="text-center">{user.name == null ? '-' : user.name }</TableCell>
                        <TableCell  className="text-center">{user.last_name == null ? '-' : user.last_name }</TableCell>
                        <TableCell  className="text-center">{user.email == null ? '-' : user.email }</TableCell>
                        <TableCell  className="text-center">{user.cpf == null ? '-' : user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') }</TableCell>
                        <TableCell  className="text-center">{user.phone == null ? '-' : user.phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3') }</TableCell>
                        <TableCell  className="flex itens-center gap-5 text-center">
                            <HiOutlinePencilAlt  
                                className="text-xl cursor-pointer hover:text-green-400 transition-[300ms]" 
                                onClick={() => router.push('/pages/user/update/' + user.id)}
                            />
                            <FaRegTrashCan 
                                className="text-xl cursor-pointer hover:text-green-400 transition-[300ms]" 
                                // onClick={() => router.push(user)}
                                />
                        </TableCell>
                    </TableRow>
                )
            })}
            </TableBody>
        </Table>
    )
}