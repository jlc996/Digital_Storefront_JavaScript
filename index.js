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
        console.error(
            "❌ servicesData.js failed to load"
        );
        return;
    }


    // =======================
    // UPDATE CART BADGE
    // Reads saved cart from localStorage
    // =======================

    function updateCartCount() {

        const cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];


        const totalQty =
            cart.reduce(
                (sum, item) =>
                    sum + (item.quantity || 1),
                0
            );


        if (cartCount) {
            cartCount.textContent = totalQty;
        }

    }



    // =======================
    // CREATE STAR DISPLAY
    // =======================

    function getStars(rating = 4.5) {

        const starContainer =
            document.createElement("span");


        for (let i = 1; i <= 5; i++) {


            const star =
                document.createElement("i");


            if (rating >= i) {

                star.className =
                    "bi bi-star-fill text-warning";

            }

            else if (rating >= i - 0.5) {

                star.className =
                    "bi bi-star-half text-warning";

            }

            else {

                star.className =
                    "bi bi-star text-warning";

            }


            starContainer.appendChild(star);

        }


        return starContainer;

    }



    // =======================
    // RENDER FEATURED SERVICES
    // Creates cards dynamically
    // =======================

    function renderFeaturedServices() {


        // Clear existing content

        featuredContainer.textContent = "";


        // Only show featured services

        const featuredServices =
            window.services.filter(
                service =>
                    service.featured === true
            );



        // Loop through data

        featuredServices.forEach(service => {



            // Column wrapper

            const col =
                document.createElement("div");


            col.className =
                "col-md-4";



            // Card container

            const card =
                document.createElement("div");


            card.className =
                "card h-100 shadow";



            // Service image

            const image =
                document.createElement("img");


            image.src =
                service.image;


            image.alt =
                service.name;


            image.className =
                "card-img-top";


            image.style.height =
                "200px";


            image.style.objectFit =
                "cover";



            // Card body

            const body =
                document.createElement("div");


            body.className =
                "card-body text-center";



            // Service name

            const title =
                document.createElement("h5");


            title.className =
                "card-title";


            title.textContent =
                service.name;



            // Price

            const price =
                document.createElement("h3");


            price.className =
                "text-primary";


            price.textContent =
                `$${service.price}`;



            // Rating

            const stars =
                getStars(service.rating);


            stars.className =
                "mb-2";



            // Description

            const description =
                document.createElement("p");


            description.className =
                "card-text";


            description.textContent =
                service.description;



            // Button area

            const buttonArea =
                document.createElement("div");


            buttonArea.className =
                "d-flex justify-content-center gap-2";



            // View button

            const viewButton =
                document.createElement("a");


            viewButton.href =
                "services.html";


            viewButton.className =
                "btn btn-outline-secondary";


            viewButton.textContent =
                "View Service";



            // Cart button

            const cartButton =
                document.createElement("button");


            cartButton.className =
                "btn btn-primary";


            cartButton.textContent =
                "Add To Cart";



            // Add cart event

            cartButton.addEventListener(
                "click",
                () => {


                    addToCart({

                        id:
                            service.id,

                        name:
                            service.name,

                        price:
                            service.price

                    });


                    updateCartCount();

                }
            );



            // Build card

            buttonArea.appendChild(viewButton);

            buttonArea.appendChild(cartButton);


            body.appendChild(title);

            body.appendChild(price);

            body.appendChild(stars);

            body.appendChild(description);

            body.appendChild(buttonArea);



            card.appendChild(image);

            card.appendChild(body);



            col.appendChild(card);



            featuredContainer.appendChild(col);



        });

    }



    // =======================
    // INITIALIZE PAGE
    // =======================

    updateCartCount();

    renderFeaturedServices();


});