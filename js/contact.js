// =====================================================
// CONTACT PAGE SCRIPT
// Handles:
// - Character Counter
// - Form Validation
// - Draft Saving (localStorage)
// - Success Messages
// =====================================================


// =====================================================
// DOM REFERENCES
// =====================================================

const contactForm =
    document.getElementById("contact-form");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const serviceSelect =
    document.getElementById("service");

const dateInput =
    document.getElementById("date");

const messageInput =
    document.getElementById("message");

const charCount =
    document.getElementById("char-count");

const formStatus =
    document.getElementById("form-status");


// =====================================================
// POPULATE SERVICE DROPDOWN
// =====================================================

function populateServices() {

    if (!serviceSelect) return;

    if (!services) {
        console.error("services array not found.");
        return;
    }

    services.forEach(service => {

        const option =
            document.createElement("option");

        option.value =
            service.id;

        option.textContent =
            service.name;

        serviceSelect.appendChild(option);

    });

}


// =====================================================
// CHARACTER COUNTER
// =====================================================

function updateCharacterCount() {

    const currentLength =
        messageInput.value.length;

    charCount.textContent =
        `${currentLength} / 500 characters`;

}


// =====================================================
// LOAD SAVED DRAFT
// =====================================================

function loadDraft() {

    const savedDraft =
        localStorage.getItem("contactDraft");

    if (savedDraft) {

        messageInput.value =
            savedDraft;

    }

    updateCharacterCount();

}


// =====================================================
// SAVE DRAFT
// =====================================================

function saveDraft() {

    localStorage.setItem(
        "contactDraft",
        messageInput.value
    );

}


// =====================================================
// DISPLAY STATUS MESSAGE
// =====================================================

function showStatusMessage(message, type) {

    formStatus.innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>
    `;

}


// =====================================================
// VALIDATE FORM
// =====================================================

function validateForm() {

    if (
        !nameInput.value.trim() ||
        !emailInput.value.trim() ||
        !serviceSelect.value ||
        !messageInput.value.trim()
    ) {

        showStatusMessage(
            "Please complete all required fields.",
            "danger"
        );

        return false;
    }

    return true;

}


// =====================================================
// HANDLE FORM SUBMISSION
// =====================================================

function handleFormSubmit(event) {

    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    showStatusMessage(
        `Thank you, ${nameInput.value}! Your message has been received.`,
        "success"
    );

    // Remove saved draft
    localStorage.removeItem("contactDraft");

    // Reset form
    contactForm.reset();

    // Reset counter
    updateCharacterCount();

}


// =====================================================
// EVENT LISTENERS
// =====================================================

messageInput.addEventListener(
    "input",
    () => {

        updateCharacterCount();

        saveDraft();

    }
);


contactForm.addEventListener(
    "submit",
    handleFormSubmit
);


// =====================================================
// INITIALIZATION
// =====================================================

populateServices();

loadDraft();