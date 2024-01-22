async function getproducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  console.log(data);

 

  const results = products.map(function (product) {
      return ` 
      <div class="product">
      <div class="pic"><img src=${product.thumbnail}></div>
      <div class="details">
      <h3>${product.title}</h3>
      <span> price : ${product.price}</span>
      </div>
      
      </div>

`
    }).join('');

  document.querySelector(".products").innerHTML = results;
}

getproducts();

