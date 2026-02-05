document.addEventListener("DOMContentLoaded", () => {
    getProducts();
});

// Ambil dari dari API
async function getProducts() {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
            method: "GET"
        });
        const data = await response.json();
        renderProducts(data);
    } catch (error) {
        console.log("Gagal memuat data: ", error);
    }
}

// Render produk ke dalam HTML
function renderProducts(products){
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product) => {
        const card = document.createElement("div");

        card.innerHTML = `
            <img src="${product.images[0]}" class="h-40 w-full object-cover mb-2 rounded">
            <h3 class="font-bold text-lg">${product.title}</h3>
            <p class="text-gray-600 text-sm mb-2">${product.description}</p>
            <p>
                Rp ${product.price.toLocaleString("id-ID")}
            </p>

            <div class="flex gap-2 mt-2">
                <a href="form.html?id=${product.id}" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</a>

                <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        `

        productList.appendChild(card);
    })
}

async function deleteProduct(id){
    const confirmDelete = confirm("Are you sure you want to delete this product?");

    if(!confirmDelete) return;

    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: "DELETE"
        })

        if(!response.ok){
            throw new Error("Failed to delete Product");
        }

        alert("Product deleted successfully");
        getProducts();
    } catch (error) {
        console.log("Error: ", error);
        alert("Gagal menghapus data");
    }
}