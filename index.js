console.log("🔥 index.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    // =======================
    // DOM REFERENCES
    // =======================
    const featuredContainer =
        document.getElementById("featured-services");

    const cartCount =
        document.getElementById("cart-count");

    // =======================
    // SAFETY CHECKS
    // =======================
    if (!featuredContainer) {
        console.error("❌ Missing #featured-services");
        return;
    }

    if (!window.services || !Array.isArray(window.services)) {
        console.error("❌ servicesData.js failed to load");
        return;
    }

    // =======================
    // UPDATE CART BADGE
    // =======================
    function updateCartCount() {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const totalQty =
            cart.reduce(
                (sum, item) => sum + (item.quantity || 1),
                0
            );

        if (cartCount) {
            cartCount.textContent = totalQty;
        }
    }

    // =======================
    // STAR RENDERING
    // =======================
    function getStars(rating = 4.5) {

        let stars = "";

        for (let i = 1; i <= 5; i++) {

            if (rating >= i) {
                stars += `<i class="bi bi-star-fill text-warning"></i>`;
            }
            else if (rating >= i - 0.5) {
                stars += `<i class="bi bi-star-half text-warning"></i>`;
            }
            else {
                stars += `<i class="bi bi-star text-warning"></i>`;
            }
        }

        return stars;
    }

    // =======================
    // RENDER FEATURED SERVICES
    // =======================
    function renderFeaturedServices() {

        featuredContainer.innerHTML = "";

        const featured =
            window.services.slice(0, 3);

        featured.forEach(service => {

            const col =
                document.createElement("div");

            col.className =
                "col-md-4";

            col.innerHTML = `
                <div class="card h-100 shadow">

                    <img
                        src="${service.image}"
                        alt="${service.name}"
                        class="card-img-top"
                        style="height:200px; object-fit:cover;">

                    <div class="card-body text-center">

                        <h5 class="card-title">
                            ${service.name}
                        </h5>

                        <h3 class="text-primary">
                            $${service.price}
                        </h3>

                        <div class="mb-2">
                            ${getStars(service.rating)}
                        </div>

                        <p class="card-text">
                            ${service.description}
                        </p>

                        <div class="d-flex justify-content-center gap-2">

                            <a href="services.html"
                                class="btn btn-outline-secondary">

                                View Service

                            </a>

                            <button
                                class="btn btn-primary add-cart">

                                Add To Cart

                            </button>

                        </div>

                    </div>

                </div>
            `;

            col.querySelector(".add-cart")
                .addEventListener("click", () => {

                    addToCart({
                        id: service.id,
                        name: service.name,
                        price: service.price
                    });

                });

            featuredContainer.appendChild(col);
        });
    }

    // =======================
    // INIT
    // =======================
    updateCartCount();
    renderFeaturedServices();

});