export default function ProductCard({product}){
    return(
        <>
            <div className="bg-blue-100 rounded-md p-2">
                <img src={product.image} alt={product.title} className="w-full h-40 mx-auto object-contain mb-4" />
                
                <p className="text-2xl font-semibold line-clamp-2">{product.title}</p>

                <p className="text-sm text-gray-600 mt-2">{product.price}</p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                    Add to Cart
                </button>
            
            </div>
        </>
    )
}