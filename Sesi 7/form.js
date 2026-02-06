const form = document.getElementById("productForm");
const message = document.getElementById("message");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value.trim();
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim();

    if(!title || !price || !description || !image) {
        message.textContent = "Please fill in all fields.";;
        message.className = "text-red-600";
        return;
    }

    const requestBody = {
        title, 
        price: Number(price),
        description,
        categoryId: 6,
        images: [image],
    };

    const url = productId
        ? `https://api.escuelajs.co/api/v1/products/${productId}`
        : "https://api.escuelajs.co/api/v1/products/";

    const method = productId ? "PUT" : "POST";

    try {
        const response = await fetch(url, {
            method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestBody),
        });

        if(!response.ok) throw new Error("Failed to submit form");

        message.textContent = productId
            ? "Product updated succesfully"
            : "Product created successfully";
            
        message.className = "text-green-600";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } catch (error) {
        message.textContent = "Error submitting form. Please try again.";
        message.className = "text-red-600";
    }
});

// Edit
async function getProductById(id){
    try{
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,);
        const product = await response.json();

        document.getElementById("title").value = product.title;
        document.getElementById("price").value = product.price;
        document.getElementById("description").value = product.description;
        document.getElementById("image").value = product.images?.[0] || "";
    } catch(error){
        console.log("Failed to load product", error);
    }
}

if(productId){
    document.querySelector("h2").textContent = "Edit Product";
    getProductById(productId);
}