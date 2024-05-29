import Menu from "@/components/Menu";

export default function Layout({ children }){
    return(
        <div className="flex">
            <Menu />
            {children}
        </div>
    )
}