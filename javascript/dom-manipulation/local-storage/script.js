const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");

const productDiv = document.querySelector(".products");

const form = document.querySelector("form");

const productsArr = JSON.parse(localStorage.getItem("products")) || [];
console.log(productsArr);

let updateIndex = null;

let ui = () => {
  productDiv.innerHTML = "";
  productsArr.forEach((elem, index) => {
    productDiv.innerHTML += `<div class="product-card">
          <div class="img">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>

          <div class="text">
            <h3>${elem.productName}</h3>
            <p>${elem.description}</p>
            <p>${elem.price}</p>
          </div>

          <div class="btns">
            <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
            <button onclick="deleteProduct(${index})" id="delete">Delete</button>
          </div>
        </div>`;
  });
};

ui(); // global ui() call for first time due to localStorage

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let image = event.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    image === ""
  ) {
    alert("please fill all the fields");
    return;
  }

  let obj = {
    productName,
    description,
    price,
    image,
  };

  if (updateIndex !== null) {
    productsArr[updateIndex] = obj;
    updateIndex = null;
    localStorage.setItem("products", JSON.stringify(productsArr));
  } else {
    productsArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productsArr));
  }

  ui();
  console.log(productsArr);

  form.reset();

  formDiv.style.display = "none";
});

const updateProduct = (name) => {
  formDiv.style.display = "flex";
  let product = productsArr.find((elem) => elem.productName === name);
  updateIndex = productsArr.findIndex((elem) => elem.productName === name);

  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.image;
};

const deleteProduct = (index) => {
  productsArr.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productsArr));
  ui();
};

// ### Learning localStorage

// localStorage.setItem("name", "Nitin gadkari");
// localStorage.setItem("song", "tera mera khatam");
// let lsd = localStorage.getItem("name");
// let song = localStorage.getItem("song");
// console.log(lsd);
// console.log("song->", song);

// Array of Objects
// let data = [
//   {
//     name: "piyush",
//     age: 69,
//     address: "saket nagar",
//     pincode: 462022,
//   },
//   {
//     name: "Aryan kelvin",
//     age: 69,
//     address: "saket nagar",
//     pincode: 462022,
//   },
//   {
//     name: "Bhuvan bam",
//     age: 69,
//     address: "Mumbai",
//     pincode: 462022,
//   },
// ];

// let newData = ["polo"];

// localStorage.setItem("fam-people", JSON.stringify(data));
// localStorage.setItem('fam-people',JSON.stringify(newData)) // updating 
// const lsd = localStorage.getItem("fam-people");
// let value = JSON.parse(lsd);
// console.log(value);

// localStorage.removeItem('fam-people')

/* 
### Notes:
- JSON stands for JavaScript Object Notation.
- JSON itself is not part of core JavaScript (ECMAScript spec).
- “JSON is a data format, and the JSON object with parse/stringify is part of core JavaScript, not a Web API.”
- It’s a data format (JavaScript Object Notation) that became so widely used 
that browsers added a built‑in global JSON object with methods like JSON.parse() and JSON.stringify().
- JSON inspired by Javascript Objects.
- JSON is a formatter which is inspired by javascript Objects.
- In JavaScript objects, keys are always strings (or symbols), while in JSON both keys and values must be in string format.
-  localStorage is a permanent storage of browser.
- localStorage runs on a set of rule:
    - Every data it takes only in string.
    - Accepting values as a "Key:Value" pairs.

- why we need JSON ? - “Before JSON, data exchange was inconsistent because each language had its own format.
     JSON solved this by providing a universal, text‑based format so data looks 
     the same across JavaScript, Python, Java/Spring Boot, PHP/Laravel, and more.”

- JSON was created by Douglas Crockford in the early 2000s (around 2001) while working at State Software. 
    He faced the problem of XML being too heavy and complex for real‑time browser–server communication,
     so he designed JSON as a lightweight, language‑independent format for data exchange.

- JSON has capabilities to transform any data into string and after that it converts back to the actual one(data).
- for conversion: JSON.stringify(data)
- for parsing: JSON.parse(string data)

### Questions:
- how i can create my own formatter like json ? like Javascript JSON Object ?


*/
