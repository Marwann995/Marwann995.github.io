/* =====================================================
   MŌKKA ADMIN
===================================================== */


let adminMenu = loadMenu();

let editingId = null;


/* =====================================================
   ELEMENTS
===================================================== */

const adminProducts =
    document.getElementById(
        "adminProducts"
    );

const adminSearch =
    document.getElementById(
        "adminSearch"
    );

const editorOverlay =
    document.getElementById(
        "editorOverlay"
    );


/* =====================================================
   LOAD MENU
===================================================== */

function loadMenu() {

    const saved =
        localStorage.getItem(
            "mokka_menu"
        );

    if (saved) {

        try {

            return JSON.parse(
                saved
            );

        }

        catch {

            return [
                ...INITIAL_MENU
            ];

        }

    }

    return [
        ...INITIAL_MENU
    ];

}


/* =====================================================
   SAVE MENU
===================================================== */

function saveMenu() {

    localStorage.setItem(
        "mokka_menu",
        JSON.stringify(
            adminMenu
        )
    );

    renderAdmin();

}


/* =====================================================
   RENDER
===================================================== */

function renderAdmin(
    search = ""
) {

    updateStats();


    const query =
        search
            .trim()
            .toLowerCase();


    const results =
        adminMenu.filter(product => {

            if (!query)
                return true;

            return (

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.english
                    .toLowerCase()
                    .includes(query)

            );

        });


    if (!results.length) {

        adminProducts.innerHTML = `

            <div class="empty">

                لا توجد منتجات.

            </div>

        `;

        return;

    }


    adminProducts.innerHTML =
        results
            .map(
                createAdminProduct
            )
            .join("");


    attachAdminEvents();

}


/* =====================================================
   PRODUCT ROW
===================================================== */

function createAdminProduct(
    product
) {

    return `

        <article
            class="admin-product"
        >

            <div>

                <div
                    class="admin-product-name"
                >

                    ${escapeHTML(
                        product.name
                    )}

                </div>

                <div
                    class="admin-product-en"
                >

                    ${escapeHTML(
                        product.english
                    )}

                </div>

            </div>


            <div
                class="admin-product-price"
            >

                ${product.price} EGP

            </div>


            <div
                class="admin-actions"
            >

                <button
                    class="small-button toggle-button"
                    data-action="toggle"
                    data-id="${product.id}"
                >

                    ${
                        product.available
                            ? "إخفاء"
                            : "إظهار"
                    }

                </button>


                <button
                    class="small-button edit-button"
                    data-action="edit"
                    data-id="${product.id}"
                >

                    تعديل

                </button>


                <button
                    class="small-button delete-button"
                    data-action="delete"
                    data-id="${product.id}"
                >

                    حذف

                </button>

            </div>

        </article>

    `;

}


/* =====================================================
   EVENTS
===================================================== */

function attachAdminEvents() {

    document
        .querySelectorAll(
            "[data-action]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.id;

                    const action =
                        button.dataset.action;


                    if (
                        action ===
                        "toggle"
                    ) {

                        toggleProduct(id);

                    }


                    if (
                        action ===
                        "edit"
                    ) {

                        editProduct(id);

                    }


                    if (
                        action ===
                        "delete"
                    ) {

                        deleteProduct(id);

                    }

                }
            );

        });

}


/* =====================================================
   TOGGLE
===================================================== */

function toggleProduct(id) {

    const product =
        adminMenu.find(
            item =>
                item.id === id
        );

    if (!product) return;


    product.available =
        !product.available;


    saveMenu();

}


/* =====================================================
   DELETE
===================================================== */

function deleteProduct(id) {

    const product =
        adminMenu.find(
            item =>
                item.id === id
        );


    if (!product) return;


    const confirmed =
        confirm(
            `هل تريد حذف "${product.name}"؟`
        );


    if (!confirmed)
        return;


    adminMenu =
        adminMenu.filter(
            item =>
                item.id !== id
        );


    saveMenu();

}


/* =====================================================
   OPEN EDITOR
===================================================== */

function openEditor(
    product = null
) {

    editorOverlay.classList.add(
        "active"
    );


    if (product) {

        editingId =
            product.id;


        document.getElementById(
            "editorTitle"
        ).textContent =
            "تعديل المنتج";


        document.getElementById(
            "productName"
        ).value =
            product.name;


        document.getElementById(
            "productEnglish"
        ).value =
            product.english;


        document.getElementById(
            "productPrice"
        ).value =
            product.price;


        document.getElementById(
            "productCategory"
        ).value =
            product.category;


        document.getElementById(
            "productDescription"
        ).value =
            product.description || "";


        document.getElementById(
            "productIngredients"
        ).value =
            (
                product.ingredients || []
            ).join(", ");


        document.getElementById(
            "productAvailable"
        ).checked =
            product.available;


        document.getElementById(
            "productFeatured"
        ).checked =
            product.featured;


        document.getElementById(
            "productNew"
        ).checked =
            product.isNew;

    }

    else {

        editingId = null;


        document.getElementById(
            "editorTitle"
        ).textContent =
            "إضافة منتج";


        document.getElementById(
            "productName"
        ).value = "";


        document.getElementById(
            "productEnglish"
        ).value = "";


        document.getElementById(
            "productPrice"
        ).value = "";


        document.getElementById(
            "productCategory"
        ).value =
            "hot";


        document.getElementById(
            "productDescription"
        ).value = "";


        document.getElementById(
            "productIngredients"
        ).value = "";


        document.getElementById(
            "productAvailable"
        ).checked = true;


        document.getElementById(
            "productFeatured"
        ).checked = false;


        document.getElementById(
            "productNew"
        ).checked = false;

    }

}


/* =====================================================
   EDIT
===================================================== */

function editProduct(id) {

    const product =
        adminMenu.find(
            item =>
                item.id === id
        );


    if (product) {

        openEditor(
            product
        );

    }

}


/* =====================================================
   SAVE EDITOR
===================================================== */

document
    .getElementById(
        "saveProduct"
    )
    .addEventListener(
        "click",
        () => {

            const name =
                document
                    .getElementById(
                        "productName"
                    )
                    .value
                    .trim();


            const english =
                document
                    .getElementById(
                        "productEnglish"
                    )
                    .value
                    .trim();


            const price =
                Number(
                    document
                        .getElementById(
                            "productPrice"
                        )
                        .value
                );


            const category =
                document
                    .getElementById(
                        "productCategory"
                    )
                    .value;


            const description =
                document
                    .getElementById(
                        "productDescription"
                    )
                    .value
                    .trim();


            const ingredients =
                document
                    .getElementById(
                        "productIngredients"
                    )
                    .value
                    .split(",")
                    .map(
                        item =>
                            item.trim()
                    )
                    .filter(Boolean);


            const available =
                document
                    .getElementById(
                        "productAvailable"
                    )
                    .checked;


            const featured =
                document
                    .getElementById(
                        "productFeatured"
                    )
                    .checked;


            const isNew =
                document
                    .getElementById(
                        "productNew"
                    )
                    .checked;


            if (!name) {

                alert(
                    "اكتب اسم المنتج أولاً."
                );

                return;

            }


            if (
                !price ||
                price < 0
            ) {

                alert(
                    "اكتب السعر بشكل صحيح."
                );

                return;

            }


            if (editingId) {

                const product =
                    adminMenu.find(
                        item =>
                            item.id ===
                            editingId
                    );


                if (!product)
                    return;


                product.name =
                    name;

                product.english =
                    english;

                product.price =
                    price;

                product.category =
                    category;

                product.description =
                    description;

                product.ingredients =
                    ingredients;

                product.available =
                    available;

                product.featured =
                    featured;

                product.isNew =
                    isNew;

            }

            else {

                const newProduct = {

                    id:
                        "product-" +
                        Date.now(),

                    name,

                    english,

                    price,

                    category,

                    description,

                    ingredients,

                    available,

                    featured,

                    isNew

                };


                adminMenu.push(
                    newProduct
                );

            }


            saveMenu();

            closeEditor();

        }
    );


/* =====================================================
   CLOSE EDITOR
===================================================== */

function closeEditor() {

    editorOverlay.classList.remove(
        "active"
    );

}


document
    .getElementById(
        "cancelEditor"
    )
    .addEventListener(
        "click",
        closeEditor
    );


/* =====================================================
   ADD
===================================================== */

document
    .getElementById(
        "addProduct"
    )
    .addEventListener(
        "click",
        () => {

            openEditor();

        }
    );


/* =====================================================
   SEARCH
===================================================== */

adminSearch.addEventListener(
    "input",
    () => {

        renderAdmin(
            adminSearch.value
        );

    }
);


/* =====================================================
   RESET
===================================================== */

document
    .getElementById(
        "resetMenu"
    )
    .addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "سيتم حذف جميع التعديلات وإرجاع القائمة الأصلية. هل أنت متأكد؟"
                );


            if (!confirmed)
                return;


            adminMenu = [
                ...INITIAL_MENU
            ];


            saveMenu();

        }
    );


/* =====================================================
   STATS
===================================================== */

function updateStats() {

    const total =
        adminMenu.length;


    const available =
        adminMenu.filter(
            item =>
                item.available
        ).length;


    const unavailable =
        total - available;


    document.getElementById(
        "totalProducts"
    ).textContent =
        total;


    document.getElementById(
        "availableProducts"
    ).textContent =
        available;


    document.getElementById(
        "unavailableProducts"
    ).textContent =
        unavailable;

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =====================================================
   START
===================================================== */

renderAdmin();