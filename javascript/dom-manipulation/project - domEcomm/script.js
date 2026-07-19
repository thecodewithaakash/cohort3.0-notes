const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");
const productDiv = document.querySelector(".products");
const form = document.querySelector("form");

const productsArr = [];
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

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("events -> ",event);
  

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let image = event.target[3].value;

  if (
    // productName.trim() === "" ||
    // description.trim() === "" ||
    // price.trim() === "" ||
    // image === ""

    productName.trim() === ""&&
    description.trim() === "" &&
    price.trim() === "" &&
    image === ""

    // in the above situation which is correct in production level Frontend system -> || or && ? 
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
  } else {
    productsArr.push(obj);
  }

  ui();
  // console.log(productsArr);

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
  ui();
};


/* 
### localStorage (Browser Storage)
- **Definition**: localStorage is a built‑in web storage API that allows you to store data in the browser.
- **Persistence**: Data stored in localStorage does not expire; it remains even after the browser is closed and reopened.
- **Storage Type**: Stores everything as **string values only**.
- **Structure**: Works in **key-value pairs**, where both keys and values are strings.
- **Keys**: Keys are always strings (even if you pass numbers, they get converted).
- **Capacity**: Typically ~5MB per origin (varies by browser).
- **Scope**: Data is scoped to the domain — accessible only by pages from the same origin.

### Usage
- **Save data**: `localStorage.setItem("key", "value")`
- **Read data**: `localStorage.getItem("key")`
- **Remove data**: `localStorage.removeItem("key")`
- **Clear all**: `localStorage.clear()`

### JSON(JavaScript Notation) Handling
- JSON is a text based format to store data in key-value pairs.
- Since localStorage only stores strings:
  - Use `JSON.stringify()` to save objects/arrays.
  - Use `JSON.parse()` to read them back into actual data structures.
- Example:
  ```js
  localStorage.setItem("user", JSON.stringify({ name: "Aakash", age: 21 }));
  const user = JSON.parse(localStorage.getItem("user"));
*/


/* 
### Homework
- rest operator: ...rest or ...args
- Destructuring - Arrays & Objects
- HOF(higher order functions)
- localStorage
- Map,filter,reduc,some,every,find,findIndex
- deep & shallow copy
- fetch API vs Axios
*/