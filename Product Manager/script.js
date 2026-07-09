// ===============================
// Get Elements
// ===============================

const productName = document.getElementById("productName");
const category = document.getElementById("category");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const discount = document.getElementById("discount");
const quantity = document.getElementById("quantity");
const image = document.getElementById("image");

const total = document.getElementById("total");
const addBtn = document.getElementById("addBtn");

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");

const productCount = document.getElementById("productCount");
const categoryCount = document.getElementById("categoryCount");
const inventoryValue = document.getElementById("inventoryValue");

const toast = document.getElementById("toast");

// ===============================
// Variables
// ===============================

let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = -1;

// ===============================
// Calculate Total
// ===============================

function calculateTotal() {

    let p = Number(price.value) || 0;
    let t = Number(taxes.value) || 0;
    let d = Number(discount.value) || 0;

    let result = p + t - d;

    total.innerHTML = "$" + result.toFixed(2);

}

price.addEventListener("input", calculateTotal);
taxes.addEventListener("input", calculateTotal);
discount.addEventListener("input", calculateTotal);

// ===============================
// Toast Message
// ===============================

function showToast(message) {

    toast.innerHTML = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);

}

// ===============================
// Save Local Storage
// ===============================

function saveData() {

    localStorage.setItem("products", JSON.stringify(products));

}

// ===============================
// Clear Inputs
// ===============================

function clearInputs() {

    productName.value = "";
    category.value = "";
    price.value = "";
    taxes.value = "";
    discount.value = "";
    quantity.value = "";
    image.value = "";

    total.innerHTML = "$0";

}

// ===============================
// Add Product
// ===============================

addBtn.addEventListener("click", function () {

    if (
        productName.value.trim() === "" ||
        category.value.trim() === "" ||
        price.value === ""
    ) {

        showToast("Please fill all required fields.");
        return;

    }

    const product = {

        name: productName.value,
        category: category.value,
        price: Number(price.value),
        taxes: Number(taxes.value) || 0,
        discount: Number(discount.value) || 0,
        quantity: Number(quantity.value) || 1,

        total:
            Number(price.value) +
            (Number(taxes.value) || 0) -
            (Number(discount.value) || 0),

        image:
            image.value ||
            "https://via.placeholder.com/70"

    };

    if (editIndex === -1) {

        products.push(product);

        showToast("Product Added Successfully");

    } else {

        products[editIndex] = product;

        editIndex = -1;

        addBtn.innerHTML =
            '<i class="fa-solid fa-plus"></i> Add Product';

        showToast("Product Updated");

    }

    saveData();

    displayProducts();

    clearInputs();

});

// ===============================
// Display Products
// ===============================

function displayProducts() {

    let rows = "";

    products.forEach(function (product, index) {

        rows += `

        <tr>

            <td>

                <img
                src="${product.image}"
                class="productImage">

            </td>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>

                <span class="priceBadge">

                $${product.price}

                </span>

            </td>

            <td>

                <span class="totalBadge">

                $${product.total}

                </span>

            </td>

            <td>${product.quantity}</td>

            <td>

                <button
                class="actionBtn editBtn"
                onclick="editProduct(${index})">

                <i class="fa-solid fa-pen"></i>

                </button>

            </td>

            <td>

                <button
                class="actionBtn deleteBtn"
                onclick="deleteProduct(${index})">

                <i class="fa-solid fa-trash"></i>

                </button>

            </td>

        </tr>

        `;

    });

    tableBody.innerHTML = rows;

    updateStatistics();

}

// ===============================
// Delete Product
// ===============================

function deleteProduct(index) {

    if (confirm("Delete this product?")) {

        products.splice(index, 1);

        saveData();

        displayProducts();

        showToast("Product Deleted");

    }

}
// ===============================
// Edit Product
// ===============================

function editProduct(index) {

    const product = products[index];

    productName.value = product.name;
    category.value = product.category;
    price.value = product.price;
    taxes.value = product.taxes;
    discount.value = product.discount;
    quantity.value = product.quantity;
    image.value = product.image;

    calculateTotal();

    editIndex = index;

    addBtn.innerHTML =
        '<i class="fa-solid fa-pen"></i> Update Product';

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ===============================
// Search
// ===============================

searchInput.addEventListener("input", function () {

    const keyword = searchInput.value.toLowerCase();

    let rows = "";

    products.forEach(function (product, index) {

        if (
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        ) {

            rows += `

            <tr>

                <td>
                    <img src="${product.image}" class="productImage">
                </td>

                <td>${product.name}</td>

                <td>${product.category}</td>

                <td>
                    <span class="priceBadge">
                        $${product.price}
                    </span>
                </td>

                <td>
                    <span class="totalBadge">
                        $${product.total}
                    </span>
                </td>

                <td>${product.quantity}</td>

                <td>

                    <button
                    class="actionBtn editBtn"
                    onclick="editProduct(${index})">

                    <i class="fa-solid fa-pen"></i>

                    </button>

                </td>

                <td>

                    <button
                    class="actionBtn deleteBtn"
                    onclick="deleteProduct(${index})">

                    <i class="fa-solid fa-trash"></i>

                    </button>

                </td>

            </tr>

            `;

        }

    });

    tableBody.innerHTML = rows;

});

// ===============================
// Statistics
// ===============================

function updateStatistics() {

    productCount.innerHTML = products.length;

    const categories = new Set();

    let value = 0;

    products.forEach(function(product){

        categories.add(product.category);

        value += product.total * product.quantity;

    });

    categoryCount.innerHTML = categories.size;

    inventoryValue.innerHTML = "$" + value.toLocaleString();

}

// ===============================
// Enter Key Support
// ===============================

document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        addBtn.click();

    }

});

// ===============================
// Image Error
// ===============================

document.addEventListener("error", function(event){

    if(event.target.tagName === "IMG"){

        event.target.src =
        "https://via.placeholder.com/70";

    }

}, true);

// ===============================
// Initial Load
// ===============================

displayProducts();
calculateTotal();
updateStatistics();