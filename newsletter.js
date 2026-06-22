// =====================================================
// NEWSLETTER SUBSCRIPTION SYSTEM
// Collab Computers
// =====================================================


// =====================================================
// DOM REFERENCES
// =====================================================

const newsletterForm =
    document.getElementById("newsletter-form");

const newsletterEmail =
    document.getElementById("newsletter-email");

const newsletterStatus =
    document.getElementById("newsletter-status");

const subscriberCount =
    document.getElementById("subscriber-count");


// =====================================================
// APPLICATION STATE
// =====================================================

let subscribers =
    JSON.parse(
        localStorage.getItem(
            "newsletterSubscribers"
        )
    ) || [];


// =====================================================
// INITIALIZATION
// =====================================================

initializeNewsletter();

function initializeNewsletter() {

    if (!newsletterForm) return;

    updateSubscriberCount();

    newsletterForm.addEventListener(
        "submit",
        handleSubscription
    );

}


// =====================================================
// HANDLE NEWSLETTER SUBMISSION
// =====================================================

function handleSubscription(event) {

    event.preventDefault();

    const email =
        newsletterEmail.value
            .trim()
            .toLowerCase();

    if (!validateEmail(email)) {

        displayMessage(
            "Please enter a valid email address.",
            "danger"
        );

        return;

    }

    const alreadySubscribed =
        subscribers.some(
            subscriber =>
                subscriber.email === email
        );

    if (alreadySubscribed) {

        displayMessage(
            "This email is already subscribed.",
            "warning"
        );

        return;

    }

    const newSubscriber = {

        id: Date.now(),

        email: email,

        subscribedOn:
            new Date().toLocaleDateString()

    };

    subscribers.push(newSubscriber);

    saveSubscribers();

    updateSubscriberCount();

    displayMessage(
        "Thank you for subscribing!",
        "success"
    );

    newsletterForm.reset();

}


// =====================================================
// EMAIL VALIDATION
// =====================================================

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


// =====================================================
// SAVE TO LOCAL STORAGE
// =====================================================

function saveSubscribers() {

    localStorage.setItem(
        "newsletterSubscribers",
        JSON.stringify(subscribers)
    );

}


// =====================================================
// UPDATE SUBSCRIBER COUNT
// =====================================================

function updateSubscriberCount() {

    if (!subscriberCount) return;

    subscriberCount.textContent =
        subscribers.length;

}


// =====================================================
// DISPLAY STATUS MESSAGE
// =====================================================

function displayMessage(
    message,
    type
) {

    newsletterStatus.innerHTML = "";

    const alert =
        document.createElement("div");

    alert.classList.add(
        "alert",
        `alert-${type}`
    );

    alert.textContent =
        message;

    newsletterStatus.appendChild(alert);

    setTimeout(() => {

        alert.remove();

    }, 4000);

}


// =====================================================
// OPTIONAL DEBUGGING
// =====================================================

// Uncomment during testing

/*
console.table(subscribers);
*/