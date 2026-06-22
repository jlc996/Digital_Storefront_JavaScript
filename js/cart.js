// ===============================
// COLLAB COMPUTERS CART SYSTEM
// CLEAN + FIXED VERSION
// ===============================

const CART_KEY = "cart";

// ===============================
// GET CART (safe + normalized)
// ===============================
function getCart() {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  // Normalize old items (fix missing quantity)
  return cart.map(item => ({
    ...item,
    quantity: item.quantity || 1
  }));
}

// ===============================
// SAVE CART
// ===============================
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ===============================
// ADD TO CART (NO DUPLICATES)
// ===============================
function addToCart(item) {

  const cart = getCart();

  const existing = cart.find(
    p => String(p.id) === String(item.id)
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1
    });
  }

  saveCart(cart);
  refreshCartUI();
}

// ===============================
// INCREASE QUANTITY
// ===============================
function increaseQty(id) {

  const cart = getCart();

  const item = cart.find(
    p => String(p.id) === String(id)
  );

  if (item) {
    item.quantity += 1;
  }

  saveCart(cart);
  refreshCartUI();
}

// ===============================
// DECREASE QUANTITY
// ===============================
function decreaseQty(id) {

  let cart = getCart();

  const item = cart.find(
    p => String(p.id) === String(id)
  );

  if (!item) return;

  item.quantity -= 1;

  // remove item if qty hits 0
  if (item.quantity <= 0) {
    cart = cart.filter(
      p => String(p.id) !== String(id)
    );
  }

  saveCart(cart);
  refreshCartUI();
}

// ===============================
// REMOVE ONE ITEM (BY ID ONLY)
// ===============================
function removeFromCart(id) {

  let cart = getCart();

  cart = cart.filter(
    item => String(item.id) !== String(id)
  );

  saveCart(cart);
  refreshCartUI();
}

// ===============================
// CLEAR CART
// ===============================
function clearCart() {
  localStorage.removeItem(CART_KEY);
  refreshCartUI();
}

// ===============================
// CART COUNT (BADGE SAFE)
// ===============================
function getCartCount() {
  const cart = getCart();

  return cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
}

// ===============================
// CART TOTAL (SAFE)
// ===============================
function getCartTotal() {
  const cart = getCart();

  return cart.reduce(
    (total, item) =>
      total + (item.price * (item.quantity || 1)),
    0
  );
}

// ===============================
// UPDATE NAV BADGE
// ===============================
function updateCartCount() {
  const badge = document.getElementById("cart-count");

  if (badge) {
    badge.textContent = getCartCount();
  }
}

// ===============================
// UPDATE ORDER SUMMARY
// ===============================
function updateOrderSummary() {

  const itemCount = document.getElementById("item-count");
  const total = document.getElementById("cart-total");

  if (itemCount) {
    itemCount.textContent = getCartCount();
  }

  if (total) {
    total.textContent = getCartTotal().toFixed(2);
  }
}

// ===============================
// RENDER CART (NO DUPLICATES)
// ===============================
// ===============================
// RENDER CART
// ===============================
function renderCart(containerId) {

    const container =
        document.getElementById(containerId);

    if (!container) return;


    const cart = getCart();


    container.textContent = "";


    if (cart.length === 0) {

        const empty =
            document.createElement("div");

        empty.className =
            "col-12 text-center";


        empty.innerHTML = `
            <div class="card shadow-sm p-4">
                <h4>Your cart is empty</h4>

                <a href="services.html"
                class="btn btn-primary mt-3">

                    Browse Services

                </a>
            </div>
        `;


        container.appendChild(empty);

        return;
    }



    cart.forEach(item => {


        const col =
            document.createElement("div");


        col.className =
            "col-md-6";



        const card =
            document.createElement("div");


        card.className =
            "card h-100 shadow-sm";



        const body =
            document.createElement("div");


        body.className =
            "card-body text-center";



        const title =
            document.createElement("h5");


        title.textContent =
            item.name;



        const price =
            document.createElement("h4");


        price.className =
            "text-primary";


        price.textContent =
            `$${item.price}`;



        const qtyArea =
            document.createElement("div");


        qtyArea.className =
            "d-flex justify-content-center gap-2 mt-3";



        const minus =
            document.createElement("button");


        minus.className =
            "btn btn-sm btn-outline-danger";


        minus.textContent =
            "-";



        minus.addEventListener(
            "click",
            () => decreaseQty(item.id)
        );



        const qty =
            document.createElement("span");


        qty.className =
            "fw-bold";


        qty.textContent =
            item.quantity;



        const plus =
            document.createElement("button");


        plus.className =
            "btn btn-sm btn-outline-success";


        plus.textContent =
            "+";



        plus.addEventListener(
            "click",
            () => increaseQty(item.id)
        );



        qtyArea.appendChild(minus);
        qtyArea.appendChild(qty);
        qtyArea.appendChild(plus);



        const footer =
            document.createElement("div");


        footer.className =
            "card-footer bg-transparent";



        const remove =
            document.createElement("button");


        remove.className =
            "btn btn-danger w-100";


        remove.textContent =
            "Remove";



        remove.addEventListener(
            "click",
            () => removeFromCart(item.id)
        );



        footer.appendChild(remove);



        body.appendChild(title);
        body.appendChild(price);
        body.appendChild(qtyArea);


        card.appendChild(body);
        card.appendChild(footer);


        col.appendChild(card);


        container.appendChild(col);

    });

}

// ===============================
// MASTER UI REFRESH (IMPORTANT)
// ===============================
function refreshCartUI() {

  updateCartCount();
  updateOrderSummary();

  const container = document.getElementById("cart-container");

  if (container) {
    renderCart("cart-container");
  }
}

// ===============================
// INIT
// ===============================
// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // Initial UI render
    refreshCartUI();

    // ===============================
    // CLEAR CART BUTTON
    // ===============================
    const clearBtn =
        document.getElementById("clear-cart-btn");

    if (clearBtn) {

        clearBtn.addEventListener("click", () => {

            const confirmed =
                confirm("Are you sure you want to clear your cart?");

            if (confirmed) {
                clearCart();
            }

        });

    }

    // ===============================
    // CHECKOUT BUTTON
    // ===============================
    const checkoutBtn =
        document.getElementById("checkout-btn");

    if (checkoutBtn) {

        checkoutBtn.addEventListener("click", () => {

            alert(
                "Checkout functionality coming soon!"
            );

        });

    }

});