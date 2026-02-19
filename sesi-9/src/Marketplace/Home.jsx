import ProductList from "./ProductList";

export default function Home(){
    return(
        <>
            <div className="mt-20 px-6">
                <p className="text-3xl font-bold text-center mb-6 text-blue-700">Marketplace</p>
            </div>

            <ProductList />
        </>
    )
}