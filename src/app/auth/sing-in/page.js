import { Input } from "@/components/ui/input";

export default function SingIn(){
    return(
        <section className="w-screen h-screen flex justify-center items-center">
            
            <div className="min-w-[500px] rounded-md border border-gray-500 p-5 flex flex-col gap-5"> 
                <div className="w-full ">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <span className="text-sm text-gray-600">Digite seu email e senha para fazer login</span>
                </div>

                <div className="w-full flex flex-col gap-5">
                    <div className="flex flex-col ">
                        <span className="whitespace-nowrap">E-mail</span>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col ">
                        <span>Senha</span>
                        <Input className="" />
                    </div>
                </div>
                
                <div className="w-full flex justify-center ">
                    <button className=" w-full bg-white text-black px-5 py-2 rounded pointer">Fazer Login</button>
                </div>

                <div className="w-full flex flex-col items-center">
                    <span className="text-xs mb-3 uppercase font-semibold">Ou crie uma conta</span>
                
                    <button className="w-full bg-black border border-gray-500 px-5 py-2 rounded pointer">Criar Conta</button>
                </div>
            </div>
            
        </section>
    )
}