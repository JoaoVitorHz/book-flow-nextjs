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

import { LuBookMarked } from "react-icons/lu";

import { useRouter } from "next/navigation";

export default function ListBooks(props){
    const router = useRouter();
    return(
        <Table className=" w-[100%] m-auto">
            <TableHeader>
                <TableRow>
                    <TableHead  className="text-center text-white">Titulo</TableHead>
                    <TableHead  className="text-center text-white">Sinopse</TableHead>
                    <TableHead  className="text-center text-white">Autor</TableHead>
                    <TableHead  className="text-center text-white">Editora</TableHead>
                    <TableHead  className="text-center text-white">Preço</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {props.dataBook?.map((book) => {
                return(
                    <TableRow key={book.id}>
                        <TableCell className="font-medium flex items-center gap-2 text-center">
                                <LuBookMarked className="text-green-400"/>
                                <span>{book.title}</span>
                        </TableCell>
                        <TableCell  className="text-center">{book.synopsis == null ? '-' : book.synopsis }</TableCell>
                        <TableCell  className="text-center">{book.author == null ? '-' : book.author }</TableCell>
                        <TableCell  className="text-center">{book.publisher == null ? '-' : book.publisher.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') }</TableCell>
                        <TableCell  className="text-center">{book.price == null ? '-' : book.price.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3') }</TableCell>
                        <TableCell  className="flex itens-center gap-5 text-center">
                            <HiOutlinePencilAlt  
                                className="text-xl cursor-pointer hover:text-green-400 transition-[300ms]" 
                                onClick={() => router.push('/pages/book/update/' + book.id)}
                            />
                            <FaRegTrashCan 
                                className="text-xl cursor-pointer hover:text-green-400 transition-[300ms]" 
                                    onClick={() => props.deleteBook(book.id)}
                                />
                        </TableCell>
                    </TableRow>
                )
            })}
            </TableBody>
        </Table>
    )
}