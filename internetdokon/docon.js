
let endpoint = "https://fakestoreapi.com/products"

  async  function getAllProduct() {
    try{
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    }catch (error){
        console.log("Error:" + error)
    }

}

 async function main() {
    const  products = await  getAllProduct();

    const productsElement = document.getElementById("products")

     for (let i = 0; i < products.length; i++) {
         productsElement.innerHTML += `
    
            <div class="col-3 mb-4">
            <a href="product.html?id=${products[i].id}"
            class="text-decoration-none">
            <div class="card border-0  shadow p-3 rounded-4">
                <img class="ms-auto me-auto" src="${products[i].image}" height="250" width="200" alt="">
                <div class="fw-bold mt-3 fs-5 text-wrap">
                ${products[i].title}
                </div>
                <div class="row mt-3 fs-6 fw-bold">
                    <div class="col-4 text-danger ">
              $${products[i].price}
                    </div>
                    <div class="col text-primary text-end">
                        <span>${products[i]['rating'].rate}</span> <i class="bi bi-star-fill text-warning"></i>
                       <span>${products[i]['rating'].count}</span> <i class="bi bi-person"></i>

                    </div>
                </div>
            </div>
            </a>
        </div>
         
         `
     }
     /*
document.getElementById("image").scr = products[2].image;
document.getElementById("title").innerText = products[2].title;
document.getElementById("price").innerText = "$" + products[2].price;
document.getElementById("rate").innerText = products[2]['rating'].rate;
document.getElementById("count").innerText = products[2]['rating'].count;

.
     console.log(products[2]['rating'].rate)

     */




}
main()

















