document.addEventListener('DOMContentLoaded', function() {


// Function to show toast
function showToast(message, backgroundColor) {
    Toastify({
      text: message,
      style:{
        color:"#fff",
      },
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: backgroundColor,
      stopOnFocus: true,
    }).showToast();
  }






let orders = JSON.parse(localStorage.getItem("orders")) || [];
let container = document.getElementById("container");

// Function to remove an order by its index
function removeOrder(index) {
    let ordersKey = 'orders';
    let orders = JSON.parse(localStorage.getItem(ordersKey)) || [];

    if (orders.length > 0 && index >= 0 && index < orders.length) {
        orders.splice(index, 1); // Remove the object at the specified index
        localStorage.setItem(ordersKey, JSON.stringify(orders)); // Save the updated array back to localStorage
        console.log(`Order at index ${index} removed. Remaining orders:`, orders);
        // Show a toast notification
        showToast(`Order removed.`, "brown");

        // Update the DOM to reflect the removed order
        renderOrders();
    } else {
        console.log('Invalid index or no more orders to remove.');
    }
}

// Function to render orders to the DOM
function renderOrders() {
    container.innerHTML = ''; // Clear the existing content
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.forEach((el, index) => {
        let div = document.createElement("div");
        div.style.marginRight = "20px";
        div.style.marginBottom = "20px";

        let name = document.createElement("p");
        name.innerText = "Name: " + el.name;

        let type = document.createElement("p");
        type.innerText = "Type: " + el.type;

        let size = document.createElement("p");
        size.innerText = "Size: " + el.size;

        let qty = document.createElement("p");
        qty.innerText = "Qty: " + el.qty;

        let price = document.createElement("p");
        price.innerText = "Price: " + el.price;

        let img = document.createElement("img");
        img.setAttribute("id","notifyButton");
        img.src = "./assets/bin.jpeg";
        img.style.width = "50px";
        img.style.cursor = "pointer"; // Change cursor to pointer to indicate it's clickable

        img.addEventListener('click', function() {
            removeOrder(index);
        });
        
        div.append(name, type, size, qty, price, img);
        container.append(div);
    });
}

// Initial render of orders
renderOrders();
});
