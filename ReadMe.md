# Collab Computers JavaScript Storefront

## Project Overview

Collab Computers JavaScript Storefront is a responsive multi-page business website that demonstrates how a traditional static storefront can be transformed into a dynamic, data-driven web application using JavaScript.

The project utilizes a centralized data architecture, dynamic DOM rendering, event-driven interactions, and browser persistence through LocalStorage. Services, featured content, cart functionality, and user interactions are powered by JavaScript rather than hardcoded HTML.

This project was created as part of the Mississippi Coding Academies Full Stack Development Program and serves as the Phase II Capstone Project: The Dynamic Engine Upgrade.

---

## Live Demo

GitHub Pages:

https://jlc996.github.io/Digital_Storefront_JavaScript/

---

## Features

### Dynamic Service Catalog

Services are stored inside a centralized JavaScript array of objects and rendered dynamically when the page loads.

Each service contains:

* ID
* Name
* Price
* Description
* Detailed Description
* Image
* Rating
* Category

Benefits:

* Eliminates duplicate HTML
* Simplifies maintenance
* Improves scalability
* Demonstrates data-driven UI design

---

### Featured Services

The homepage automatically generates featured service cards using JavaScript.

Features include:

* Shared data source
* Responsive Bootstrap layout
* Dynamic card generation
* Reusable rendering functions

---

### Shopping Cart System

Users can add services directly to their shopping cart.

Features include:

* Add to Cart functionality
* Dynamic cart badge updates
* Quantity tracking
* Cart total calculations
* Remove items
* Clear cart

---

### LocalStorage Persistence

Cart data and user preferences are preserved using browser LocalStorage.

Implemented with:

* localStorage.setItem()
* localStorage.getItem()
* JSON.stringify()
* JSON.parse()

This ensures that cart contents remain available after page refreshes or navigation.

---

### Service Quick View Modals

Each service includes a dynamic Quick View modal.

Modal content includes:

* Service title
* Service image
* Detailed description
* Pricing information
* Customer ratings

Modal data is generated from the shared service data structure.

---

### Contact Form

The Contact page uses JavaScript to provide interactive form behavior.

Features include:

* Form validation
* Character counter
* Success messages
* Draft persistence

---

### Newsletter Subscription

Users can subscribe to the Collab Computers newsletter.

Features include:

* Email validation
* Duplicate subscription prevention
* Subscriber tracking
* LocalStorage persistence
* Dynamic status messages

---

### Responsive Design

Built using Bootstrap 5.3 and custom CSS.

Supports:

* Desktop
* Tablet
* Mobile devices

Responsive elements include:

* Navigation menu
* Dynamic cards
* Quick View modals
* Shopping cart layout
* Contact form

---

## Pages

### Home Page

Features:

* Hero section
* Company overview
* Featured services
* Newsletter signup

---

### Services Page

Features:

* Dynamic service catalog
* Service ratings
* Pricing
* Quick View modals
* Add to Cart functionality

---

### Cart Page

Features:

* Dynamic cart rendering
* Quantity tracking
* Order summary
* LocalStorage persistence

---

### About Page

Features:

* Company story
* Founder information
* Mission statement

---

### Reviews Page

Features:

* Customer testimonials
* Star ratings
* Responsive card layouts

---

### Contact Page

Features:

* Contact form
* Service request form
* Form validation
* Draft saving
* Social media links

---

## Technologies Used

### Front-End

* HTML5
* CSS3
* JavaScript ES6
* Bootstrap 5.3
* Bootstrap Icons

### JavaScript Concepts Demonstrated

* Arrays and Objects
* DOM Manipulation
* Event Listeners
* Dynamic Rendering
* LocalStorage Persistence
* Form Validation
* State Management
* Reusable Components
* Functional Array Methods
* Responsive UI Development

---

## Project Structure

```text
Digital_Storefront_JavaScript/

├── index.html
├── services.html
├── cart.html
├── about.html
├── reviews.html
├── contact.html
├── privacy-policy.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── servicesData.js
│   ├── index.js
│   ├── services.js
│   ├── cart.js
│   ├── contact.js
│   └── newsletter.js
│
├── assets/
│   └── images/
│       ├── falcon-head-logo.png
│       ├── founder.png
│       └── services/
│
└── README.md
```

---

## Learning Outcomes

This project demonstrates the transition from a static website to a dynamic JavaScript application by implementing:

* Data architecture using arrays and objects
* Dynamic DOM rendering
* Event-driven programming
* LocalStorage persistence
* Responsive design principles
* Reusable JavaScript components
* State management techniques

These concepts form the foundation of modern front-end application development.

## Author

Joshua Craven

Mississippi Coding Academies
Full Stack Development Program

GitHub: https://github.com/jlc996