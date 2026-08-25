async function datafetching() {
  try {
    console.log("Welcome");

    let url = "https://fakestoreapi.com/products";

    let response = await fetch(url);

    let data = await response.json();

    renderdata(data);

  } catch (error) {
    console.log(error);
    console.log("Fix it first");
  }

  console.log("Transfer");
}
function renderdata(data) {
  console.log("========== PRODUCTS ==========");

  data.forEach((product) => {
    console.log(`Product: ${product.title}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
    console.log(`Rating: ${product.rating.rate}`);
    console.log("------------------------------");
  });
}

datafetching();



function render(data){
    const container = document.getElementById('product-container');
    const productsHTML=data.map((item)=>{
        return`
        <div class="products-cards">
        <img src="${item.image}" alt="${item.title}" style="width:100px; hright:100px; object-fit:contain;" />
        <h3>${item.title.substring(0,30)}...</h3>
        <p class="category">${item.category}</p>
        <p class="price">$${item.price}</p>
        <p class="desc">${item.description.substring(0,60)}...</p>
        <div class="rating">
        ${item.rating.rate}(${item.rating.count} reviews)
        </div>
        </div>
        `;
    }).join('');
    container.innerHTML=productsHTML;
}