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
function renderCart(containerId) {

  const container = document.getElementById(containerId);
  if (!container) return;

  const cart = getCart();

  // 🔥 ALWAYS CLEAR FIRST (prevents duplicate DOM)
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="col-12 text-center">
                <div class="card shadow-sm p-4">
                    <h4>Your cart is empty</h4>
                    <a href="services.html" class="btn btn-primary mt-3">
                        Browse Services
                    </a>
                </div>
            </div>
        `;
    return;
  }

  cart.forEach(item => {

    const col = document.createElement("div");
    col.className = "col-md-6";

    col.innerHTML = `
            <div class="card h-100 shadow-sm">

                <div class="card-body">

    <h5 class="card-title">
        ${item.name}
    </h5>

    <h4 class="text-primary">
        $${item.price}
    </h4>

    <!-- QUANTITY CONTROLS -->
    <div class="d-flex align-items-center justify-content-center gap-2 mt-3">

        <button class="btn btn-sm btn-outline-danger"
            onclick="decreaseQty('${item.id}')">

            -

        </button>

        <span class="fw-bold">
            ${item.quantity}
        </span>

        <button class="btn btn-sm btn-outline-success"
            onclick="increaseQty('${item.id}')">

            +

        </button>

    </div>

</div>

                <div class="card-footer bg-transparent border-0">

                    <button
                        class="btn btn-danger w-100"
                        onclick="removeFromCart('${item.id}')">

                        Remove

                    </button>

                </div>

            </div>
        `;

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
document.addEventListener("DOMContentLoaded", refreshCartUI);