console.log("🔥 services.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    // =======================
    // DOM ELEMENTS
    // =======================
    const container = document.getElementById("services-container");
    const cartCount = document.getElementById("cart-count");

    // =======================
    // SAFETY CHECKS
    // =======================
    if (!container) {
        console.error("❌ Missing #services-container in HTML");
        return;
    }

    if (!window.services || !Array.isArray(window.services)) {
        console.error("❌ servicesData.js not loaded or invalid");
        container.innerHTML =
            "<h3 class='text-danger text-center'>Services failed to load</h3>";
        return;
    }

    const services = window.services;

    // =======================
    // CART COUNT (READ ONLY)
    // =======================
    function updateCartCount() {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        if (cartCount) {
            const totalQty = cart.reduce(
                (sum, item) => sum + (item.quantity || 1),
                0
            );

            cartCount.textContent = totalQty;
        }
    }

    // =======================
    // ADD TO CART (USES cart.js SYSTEM)
    // =======================
    function addToCart(service) {

        // IMPORTANT: uses cart.js global function
        window.addToCart({
            id: service.id,
            name: service.name,
            price: service.price
        });

        updateCartCount();
    }

    // =======================
    // STAR RENDERING
    // =======================
    function getStars(rating = 4.5) {

        let stars = "";

        for (let i = 1; i <= 5; i++) {

            if (rating >= i) {
                stars += `<i class="bi bi-star-fill text-warning"></i>`;
            } else if (rating >= i - 0.5) {
                stars += `<i class="bi bi-star-half text-warning"></i>`;
            } else {
                stars += `<i class="bi bi-star text-warning"></i>`;
            }
        }

        return stars;
    }

    // =======================
    // MODAL
    // =======================
    function openModal(service) {

        document.getElementById("modalTitle").textContent =
            service.name;

        document.getElementById("modalImage").src =
            service.image;

        document.getElementById("modalPrice").textContent =
            `$${service.price}`;

        document.getElementById("modalStars").innerHTML =
            getStars(service.rating);

        const modalDescription =
            document.getElementById("modalDescription");

        modalDescription.innerHTML = `
            <ul class="text-start">
                ${service.details
                    .map(d => `<li>${d}</li>`)
                    .join("")}
            </ul>
        `;

        document.getElementById("modalAddBtn").onclick = () => {
            addToCart(service);
        };

        new bootstrap.Modal(
            document.getElementById("serviceModal")
        ).show();
    }

    // =======================
    // RENDER SERVICES
    // =======================
    function renderServices(list) {

        container.innerHTML = "";

        list.forEach(service => {

            const col = document.createElement("div");
            col.className = "col-md-4";

            col.innerHTML = `
                <div class="card shadow h-100 border">

                    <img src="${service.image}"
                        class="card-img-top"
                        style="height:200px; object-fit:cover;">

                    <div class="card-body text-center">

                        <h5>${service.name}</h5>

                        <h3 class="text-primary">
                            $${service.price}
                        </h3>

                        <div class="mb-2">
                            ${getStars(service.rating)}
                        </div>

                        <p class="text-muted">
                            ${service.description}
                        </p>

                        <div class="d-flex justify-content-center gap-2">

                            <button class="btn btn-outline-secondary btn-view">
                                Quick View
                            </button>

                            <button class="btn btn-primary btn-cart">
                                Add To Cart
                            </button>

                        </div>

                    </div>
                </div>
            `;

            col.querySelector(".btn-view")
                .addEventListener("click", () => openModal(service));

            col.querySelector(".btn-cart")
                .addEventListener("click", () => addToCart(service));

            container.appendChild(col);
        });
    }

    // =======================
    // INIT
    // =======================
    updateCartCount();
    renderServices(services);
});