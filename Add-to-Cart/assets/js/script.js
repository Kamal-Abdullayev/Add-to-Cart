let butButton = document.querySelectorAll(".btn");
let cartCount = document.querySelector("#cartCount");


if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify([]))
}

butButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (localStorage.getItem("cart") == null) {
            localStorage.setItem("cart", JSON.stringify([]))
        }
        let productExist = cart.find(e => e.id == btn.parentElement.parentElement.getAttribute("data-id"));
        if (productExist === undefined) {
            cart.push({
                id: btn.parentElement.parentElement.getAttribute("data-id"),
                name: btn.parentElement.firstElementChild.innerText,
                count: 1,
                price: btn.previousElementSibling.previousElementSibling.innerText,
                imgUrl: btn.parentElement.previousElementSibling.getAttribute("src")
            });
        } else {
            productExist.count++;
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        getBusketCount();
    })
})


function getBusketCount(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cartCount.innerText = cart.length;
}

getBusketCount();