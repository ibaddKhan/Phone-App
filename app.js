const mainDiv = document.getElementById("main-div");
const phones = [
  {
    img: "./assets/s20.png",
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: " Rs. 90,000",
  },
  {
    img: "./assets/iphone.png",
    brand: "IPhone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: " Rs. 255,000",
  },
  {
    img: "./assets/pixel.png",
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 256,
    camera: "30 megapixel",
    price: " Rs. 190,000",
  },
  {
    img: "./assets/sony.jpg",
    brand: "Sony",
    model: "Xperia Xz3",
    ram: 4,
    rom: 128,
    camera: "19 megapixel",
    price: " Rs. 35,000",
  },
  {
    img: "./assets/note10.png",
    brand: "Xiaomi",
    model: "note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: " Rs. 35,000",
  },
  {
    img: "./assets/infi.png",
    brand: "Infinix",
    model: "Smart 7",
    ram: "6/8",
    rom: 256,
    camera: "5 megapixel",
    price: " Rs. 25,000",
  },
  {
    img: "./assets/spark.png",
    brand: "Tecno",
    model: "spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: " Rs. 28,000",
  },

  {
    img: "./assets/f11.png",
    brand: "Oppo",
    model: "Reno 6",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: " Rs. 18,000",
  },
  {
    img: "./assets/y20.png",
    brand: "Vivo",
    model: "y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: " Rs. 23,000",
  },
];
for (let i = 0; i < phones.length; i++) {
  mainDiv.innerHTML += `
    <div class="main"><div> 
    <h2 class=" padding:10px">${phones[i].brand}</h2>
   <img src="${phones[i].img}" class="image">
   <h3>Device : ${phones[i].model}</h3>
   <h3>Ram : ${phones[i].ram} Gb</h3>
   <h3>Rom : ${phones[i].rom}Gb</h3>
   <h3>Camera : ${phones[i].camera}</h3>
   <h3>Price : <span style= "color:red; font-weight:bolder; font-size:20px;">${phones[i].price}</span></h3>
   <div class= "button"><button onclick="cart(${i})" class="cart">Buy Now</button></div>
    </div>
    </div>`;
}
const pArray = [];
function cart(index) {
  if (pArray.includes(phones[index])) {
    for (let i = 0; i < pArray.length; i++) {
      if (pArray[i] == phones[index]) {
        phones[index].Quantity += 1;
      }
    }
  } else {
    phones[index].Quantity = 1;
    pArray.push(phones[index]);
  }
  console.log(pArray);
}
function gotoCart() {
  const cartItems = JSON.stringify(pArray);
  localStorage.setItem("pArray", cartItems);
  window.location = "./cart.html";
  console.log(pArray);
}
