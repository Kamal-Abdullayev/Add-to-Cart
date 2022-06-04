
if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify([]))
}

function getBusketCount() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cartCount.innerText = cart.length;
}

getBusketCount();

let cart = JSON.parse(localStorage.getItem("cart"));
let tbody = document.querySelector(".product-list")
let span = document.querySelector("#total-price");
let totalPrice = 0

cart.forEach(e => {
    let totalProductPrice = parseInt(e.count) * parseInt(e.price);
    totalPrice +=totalProductPrice;
    tbody.innerHTML += `
     <tr>
        <td class="col-2">${e.name}</td>
        <td class="col-2">${e.count}</td>
        <td class="col-2">${totalProductPrice}</td>
        <td class="col-2">
            <div class="post-img">
                <img src="${e.imgUrl}" alt="">
            </div>
        </td>
    </tr>`;
    
})


span.innerHTML = totalPrice;