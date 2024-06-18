   // Get form and input elements
   let form = document.querySelector("form");
   let nameInput = document.getElementById("name");
   let typeInput = document.getElementById("type");
   let sizeInput = document.getElementById("size");
   let qtyInput = document.getElementById("qty");
   
   // Listen for form submission
   form.addEventListener("submit", function(e) {
       e.preventDefault();
   
       // Get input values
       let name = nameInput.value;
       let type = typeInput.value;
       let size = sizeInput.value;
       let qty = qtyInput.value;
       let price=0;
       if(type=="Americano"&&size=="Small")
       {
           price=100;
       }
       else if(type=="Americano"&& size=="Medium")
       {
           price=200;
       }
       else if(type=="Americano"&& size=="Large")
       {
           price=300;
       }
       else if(type=="Expresso"&&size=="Small")
       {
           price=70;
       }
       else if(type=="Expresso"&& size=="Medium")
       {
           price=140;
       }
       else if(type=="Expresso"&& size=="Large")
       {
           price=210;
       }
       else if(type=="Cappuccino"&&size=="Small")
       {
           price=50;
       }
       else if(type=="Cappuccino"&& size=="Medium")
       {
           price=100;
       }
       else if(type=="Cappuccino"&& size=="Large")
       {
           price=150;
       }
       // Create order object
       let order = {
           name ,
           type,
           size,
           qty,
           price 
   
       };
   
       // Add order to orders array
       let orders = JSON.parse(localStorage.getItem("orders")) || [];
       orders.push(order);
       localStorage.setItem("orders", JSON.stringify(orders));
   
       // Reset form inputs
       form.reset();
   
       // Show success message
       alert("Order placed successfully!");
   });
   