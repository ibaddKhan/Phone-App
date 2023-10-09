const mainDiv = document.getElementById("main-div");
const phones = [
  {
    img: "./assets/s20.png",
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 90000,
  },
  {
    img: "./assets/iphone.png",
    brand: "IPhone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: 255000,
  },
  {
    img: "./assets/pixel.png",
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 256,
    camera: "30 megapixel",
    price: 190000,
  },
  {
    img: "./assets/sony.jpg",
    brand: "Sony",
    model: "Xperia Xz3",
    ram: 4,
    rom: 128,
    camera: "19 megapixel",
    price: 35000,
  },
  {
    img: "./assets/note10.png",
    brand: "Xiaomi",
    model: "note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: 35000,
  },
  {
    img: "./assets/infi.png",
    brand: "Infinix",
    model: "Smart 7",
    ram: "6/8",
    rom: 256,
    camera: "5 megapixel",
    price: 25000,
  },
  {
    img: "./assets/spark.png",
    brand: "Tecno",
    model: "spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: 28000,
  },

  {
    img: "./assets/f11.png",
    brand: "Oppo",
    model: "Reno 6",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 18000,
  },
  {
    img: "./assets/y20.png",
    brand: "Vivo",
    model: "y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: 23000,
  },
];
// const data = localStorage.getItem("pArray");
// const arrayData = JSON.parse(data);
// const pArray = [...arrayData];
const pArray = [];

for (let i = 0; i < phones.length; i++) {
  mainDiv.innerHTML += `
  <div class="main"><div> 
  <h2 class=" padding:10px">${phones[i].brand}</h2>
  <img src="${phones[i].img}" class="image">
  <h3>Device : ${phones[i].model}</h3>
  <h3>Ram : ${phones[i].ram} Gb</h3>
  <h3>Rom : ${phones[i].rom}Gb</h3>
  <h3>Camera : ${phones[i].camera}</h3>
  <h3 style="Border:1px solid  ;border-radius: 15px 50px;    background-color: #e5f3ff; margin-top:6px ">Price : <span style= "color:red; font-weight:bolder; font-size:20px; "> ${phones[i].price}</span></h3>
  <div class= "button"><button onclick="cart(${i})" class="cart">Buy Now</button></div>
  </div>
   </div>`;
}

const sony = document.querySelectorAll(".image")[3];
const oppo = document.querySelectorAll(".image")[7];
if (sony) {
  sony.style.width = "126px";
}
if (oppo) {
  oppo.style.width = "110px";
}

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
}
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const mainDiv2 = document.querySelector("#main-div2");

login.addEventListener("click", clickingLogin);
function clickingLogin() {
  console.log("Login Working");
  mainDiv2.innerHTML = `  <div class="center">
  <div class="container">
  <label style="display:flex; justify-content:end; cursor:pointer;" onclick="remove();" class="close-btn fas fa-times" title="close"></label>
  <div class="text">Login Form</div>
  <form action="#">
    <div class="data">
      <label>Email or Phone</label>
      <input class="email" type="text" required />
    </div>
    <div class="data">
      <label>Password</label>
      <input class="password" type="password" required />
    </div>
    <div class="forgot-pass">
      <a href="#">Forgot Password?</a>
    </div>
    <div class="btn">
      <div class="inner"></div>
      <button type="submit">login</button>
    </div>

  </form>
</div>
</div>`;
  if (mainDiv2.innerHTML === "") {
    mainDiv.style.opacity = 10000000;
  } else {
    mainDiv.style.opacity = 0.2;
  }

  const form = document.querySelector("form");
  const email = document.querySelector(".email");
  const pass = document.querySelector(".password");
  const detailsArray = [];

  form.addEventListener("submit", sub);
  function sub(e) {
    e.preventDefault();
    const sum = {
      Email: email.value,
      Pass: pass.value,
    };
    detailsArray.push(sum);
    const userDetails = JSON.stringify(detailsArray);
    localStorage.setItem("dArray", userDetails);
    console.log(detailsArray);
  }
}

function remove() {
  console.log("Ads");
  mainDiv2.remove();
  location.reload();
}
