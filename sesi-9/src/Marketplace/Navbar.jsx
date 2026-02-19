export default function Navbar(){
    return(
        <>
            <nav className="fixed top-0 w-full bg-white shadow px-6 py-3 flex justify-between">
                <p className="font-bold text-xl">MyMarket</p>
                <p className="cursor-pointer">Cart 🛒</p>
            </nav>
        </>
    )
}