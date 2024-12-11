const currentUrl = window.location.href;

const urlObject = new URL(currentUrl);

const searchParams = new URLSearchParams(urlObject.search);

const id = searchParams.get('id');


let endpoint = "https://fakestoreapi.com/product" + id

async function getProduct() {
    try {
        const response = await fetch(endpoint);

        return await response.json();
    } catch (error) {
        console.log("Error:" + error)
    }


}

async function main() {
    const product = await getProduct();
    document.getElementById("image").scr = product.image;
    document.getElementById("title").innerText = product.title;
    document.getElementById("category").innerText = product.category;
    document.getElementById("price").innerText = "$" + product.price;
    document.getElementById("rate").innerText = product['rating'].rate;
    document.getElementById("count").innerText = product['rating'].count;
    document.getElementById("description").innerText = product.description;


}

main()
