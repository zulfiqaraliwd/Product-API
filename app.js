// // console.log("hellow world")


// const products = [
//     { id: 1, name: "Smartphone", category: "Electronics" },
//     { id: 2, name: "Laptop", category: "Electronics" },
//     { id: 3, name: "Headphones", category: "Accessories" },
//     { id: 4, name: "T-Shirt", category: "Fashion" },
//     { id: 5, name: "Running Shoes", category: "Fashion" },
//     { id: 6, name: "Apple", category: "Groceries" },
//     { id: 7, name: "Carrot", category: "Groceries" },
//     { id: 8, name: "Chair", category: "Furniture" },
//     { id: 9, name: "Table", category: "Furniture" },
//     { id: 10, name: "Bicycle", category: "Automobile" },
//   ];
  

// const cart=document.querySelector("#container")
// for(var i=0;i<=products.length-1;i++){

//     console.log(products[i])
// cart.innerHTML+= `
// <li>ID:${products[i].category}

// NAME : ${products[i].name}</li>
// ` 
// }

// sructure for API fetching
// fetch ('url')
// .then ((res)=>res.JSON())
// .then((res)=>{
//     console.log(res.products);
// })

// .catch((err)=>{
//     console.log(err);
// });









const div = document.querySelector(".container");

// Fetch products and render them
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    res.products.map((item) => {
      div.innerHTML += `
        <div class="card">
          <img src="${item.thumbnail}" alt="thumbnail">
          <h1>${item.title}</h1>
          <p>${item.description.slice(0, 15)}...</p>
          <p>Price: $${item.price}</p>
          <button onclick="showMore(${item.id})">See more</button>
        </div>`;
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });


const showMore = (id) => {
  console.log("Selected Product ID:", id);
  localStorage.setItem("id", id);
  window.location = "singleProduct.html";
};






