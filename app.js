const shoes = [
  {
    shoeUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bb/P00429630.jpg",
    title: "AQUAZZURA",
    subTitle:
      "Start every ensemble on the right foot with Aquazzura's Bow Tie sandals in velvety black suede. Crafted in Italy, this pair features pointed 105mm stiletto heels",
    price: 399,
    category: "WOMEN",
    quantity: 3,
  },
  {
    shoeUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/da/P00699578_b1.jpg",
    title: "ANKLE BOOTS",
    subTitle:
      "Start every ensemble on the right foot with Aquazzura's Bow Tie sandals in velvety black suede. Crafted in Italy, this pair features pointed 105mm stiletto heels",
    price: 199,
    category: "WOMEN",
    quantity: 2,
  },
  {
    shoeUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/1b/P00613386.jpg",
    title: "GUCCI",
    subTitle:
      "Set on chunky soles with paneled leather uppers, these Gucci sneakers feature a version of the label's logo from the 1980s printed ",
    price: 399,
    category: "MEN",
    quantity: 12,
  },
  {
    shoeUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8f/P00436275.jpg",
    title: "GUCCI",
    subTitle:
      "Set on chunky soles with paneled leather uppers, these Gucci sneakers feature a version of the label's logo from the 1980s printed ",
    price: 199,
    category: "MEN",
    quantity: 1,
  },
  {
    shoeUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/02/P00591990.jpg",
    title: "MOSCHINO KIDS",
    subTitle:
      "These white sneakers from Moschino Kids are accented with the label's teddy bear mascot at the sides",
    price: 99,
    category: "KIDS",
    quantity: 11,
  },
  {
    shoeUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/fc/P00687589.jpg",
    title: "STELLA MCCARTNEY KIDS",
    subTitle:
      "Your little trendsetters will love stomping around in these sneakers from Stella McCartney Kids. ",
    price: 89,
    category: "KIDS",
    quantity: 11,
  },
];

// ფილტრი

const shoesToScreen = (shoe) => {
  return `<div class="gallery">  
  <div class="image">
  <img class="shoe-img" src=${shoe.shoeUrl} alt="shoe image"></img>
  
  <div class="title">
  ${shoe.title} <br>
  <p class="subtitle"> ${shoe.subTitle}</p><br>
  <p class="price"> $${shoe.price}</p><br> 
  <p class="category">Category:${shoe.category}</p><br> 
  <p class="quantity">Quantity:${shoe.quantity}</p></br>
  
  </div><br> 
  <button id='cardbtn' class="gallery-button" >Add to Cart</button>
  </div>
  
  </div>`;
};

const gallery = document.querySelector(".gallery");

gallery.innerHTML = shoes.map((shoe) => shoesToScreen(shoe)).join("");

const btn = document.querySelectorAll(".btn");
const btns = [...btn];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);
    if (btn.textContent === "ALL") {
      gallery.innerHTML = shoes.map((shoe) => shoesToScreen(shoe));
      return;
    }
    let filtered = shoes.filter((shoe) => shoe.category === btn.textContent);

    gallery.innerHTML = filtered.map((shoe) => shoesToScreen(shoe)).join("");
  });
});

//search input
const searchInput = document.getElementById("search");
console.log(searchInput);

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();
  const filteredShoes = shoes.filter(function (shoe) {
    return (
      shoe.title.toLowerCase().includes(searchValue) ||
      shoe.subTitle.toLowerCase().includes(searchValue) ||
      shoe.category.toLowerCase().includes(searchValue)
    );
  });

  console.log(filteredShoes);
  gallery.innerHTML = filteredShoes.map((shoe) => shoesToScreen(shoe));
});

// add to cart

const addToCartButtons = document.querySelectorAll("#cardbtn");
console.log(addToCartButtons);
const cartItem = document.querySelector("span");
console.log(cartItem);

addToCartButtons.forEach(function (addToCartButton) {
  addToCartButton.addEventListener("click", function () {
    let currentCount = parseInt(cartItem.textContent);
    cartItem.textContent = currentCount + 1;
    console.log(currentCount);
  });
});
