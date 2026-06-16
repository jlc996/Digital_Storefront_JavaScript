# Collab Computers JavaScript Storefront

## Project Overview

Collab Computers JavaScript Storefront is a responsive multi-page business website designed to showcase computer services through a dynamic, data-driven interface.

Unlike the original static storefront, this version uses JavaScript to generate service cards, featured services, and modal content from a centralized data source. This approach improves maintainability, scalability, and code reusability while demonstrating modern front-end development practices.

This project was created as part of the Mississippi Coding Academies Full Stack Development program to practice building dynamic web applications using HTML, CSS, Bootstrap, and JavaScript.

---

## Live Demo

GitHub Pages:

https://jlc996.github.io/Digital_Storefront_JavaScript/

---

# Features

## Dynamic Service Catalog

Services are generated through JavaScript using a shared data structure.

Each service includes:

- Service name
- Price
- Description
- Star rating
- Image
- Category information

This prevents duplicate HTML and allows services to be updated from one location.

---

## Featured Services Section

The home page displays featured services dynamically.

Features include:

- JavaScript generated service cards
- Responsive Bootstrap layout
- Reusable card components
- Shared service data

---

## Service Quick View Modals

Each service includes a Quick View modal.

Modal content includes:

- Service title
- Service image
- Detailed description
- Price
- Customer rating

All modal information is generated dynamically using JavaScript.

---

## Responsive Design

Built using Bootstrap 5.3 to support:

- Desktop
- Tablet
- Mobile devices

The layout automatically adjusts using Bootstrap's responsive grid system.

---

# Pages

## Home Page

Includes:

- Company introduction
- Featured services
- Navigation
- Responsive layout

---

## Services Page

Displays all available services.

Includes:

- Dynamic service cards
- Pricing
- Ratings
- Quick View modals

---

## About Page

Provides information about:

- Company background
- Founder story
- Mission statement

---

## Reviews Page

Displays customer testimonials.

Features:

- Bootstrap cards
- Star ratings
- Responsive design

---

## Contact Page

Includes:

- Contact information
- Email link
- Phone number
- Social media links

---

# Technologies Used

## Front-End

- HTML5
- CSS3
- JavaScript ES6
- Bootstrap 5.3
- Bootstrap Icons

## Concepts Practiced

- DOM manipulation
- Dynamic rendering
- Reusable components
- Data-driven UI design
- JavaScript modules
- Responsive layouts

---

# Project Structure

```text
Digital_Storefront_JavaScript/

├── index.html
├── services.html
├── about.html
├── reviews.html
├── contact.html
├── privacy-policy.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── serviceData.js
│   ├── index.js
│   └── services.js
│
├── assets/
│   └── images/
│       ├── falcon-head-logo.png
│       ├── founder.png
│       └── service-images
│
└── README.md