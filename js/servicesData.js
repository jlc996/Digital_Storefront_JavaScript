// =======================
// SERVICES DATA
// =======================

const services = [
    {
        id: "svc01",
        name: "Custom Computers",
        price: 1500,
        category: "Builds",
        rating: 4.5,
        image: "https://images.pexels.com/photos/6942359/pexels-photo-6942359.jpeg",
        description: "Custom gaming, business, and workstation computers.",
        details: [
            "Intel or AMD processors",
            "High-performance graphics cards",
            "Fast NVMe SSD storage",
            "Custom RGB configurations",
            "Professional cable management"
        ],
        featured: true,
        inStock: true
    },

    {
        id: "svc02",
        name: "Computer Repairs",
        price: 40,
        category: "Repairs",
        rating: 4.5,
        image: "https://images.pexels.com/photos/7639373/pexels-photo-7639373.jpeg",
        description: "Fast and reliable hardware and software repairs.",
        details: [
            "Hardware troubleshooting",
            "Software repair",
            "Performance optimization",
            "Component replacement",
            "System cleanup"
        ],
        featured: true,
        inStock: true
    },

    {
        id: "svc03",
        name: "Computer Upgrades",
        price: 40,
        category: "Upgrades",
        rating: 4.0,
        image: "https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg",
        description: "Upgrade components to improve performance.",
        details: [
            "RAM upgrades",
            "SSD upgrades",
            "Graphics card upgrades",
            "CPU cooling upgrades",
            "Performance tuning"
        ],
        featured: true,
        inStock: true
    },

    {
        id: "svc04",
        name: "Diagnostic Check",
        price: 40,
        category: "Repairs",
        rating: 4.5,
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        description: "Complete hardware and software diagnostics.",
        details: [
            "Full hardware inspection",
            "Operating system health check",
            "Performance testing",
            "Malware and virus scan",
            "Repair recommendations"
        ],
        featured: false,
        inStock: true
    },

    {
        id: "svc05",
        name: "Virus Removal",
        price: 70,
        category: "Repairs",
        rating: 4.5,
        image: "https://images.pexels.com/photos/14066351/pexels-photo-14066351.jpeg",
        description: "Remove malware, spyware, and viruses.",
        details: [
            "Virus removal",
            "Malware cleanup",
            "Spyware removal",
            "Security vulnerability scan",
            "System performance optimization"
        ],
        featured: false,
        inStock: true
    },

    {
        id: "svc06",
        name: "OS Reinstall",
        price: 90,
        category: "Repairs",
        rating: 4.0,
        image: "https://images.pexels.com/photos/11035476/pexels-photo-11035476.jpeg",
        description: "Fresh operating system installation and setup.",
        details: [
            "Fresh Windows installation",
            "Driver installation and updates",
            "System optimization",
            "Basic software setup",
            "Optional data backup"
        ],
        featured: false,
        inStock: true
    },

    {
        id: "svc07",
        name: "RAM Upgrade",
        price: 40,
        category: "Upgrades",
        rating: 4.0,
        image: "https://images.pexels.com/photos/34006659/pexels-photo-34006659.jpeg",
        description: "Improve speed and multitasking performance.",
        details: [
            "Memory compatibility check",
            "Professional RAM installation",
            "Performance testing",
            "System optimization",
            "Improved multitasking"
        ],
        featured: false,
        inStock: true
    },

    {
        id: "svc08",
        name: "SSD Installation",
        price: 60,
        category: "Upgrades",
        rating: 4.0,
        image: "https://images.pexels.com/photos/28666524/pexels-photo-28666524.jpeg",
        description: "Install high-speed SSD storage.",
        details: [
            "High-speed SSD installation",
            "Operating system migration",
            "Performance testing",
            "Drive optimization",
            "Data transfer support"
        ],
        featured: false,
        inStock: true
    },

    {
        id: "svc09",
        name: "Graphics Card Install",
        price: 70,
        category: "Upgrades",
        rating: 4.0,
        image: "https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg",
        description: "Professional GPU installation and configuration.",
        details: [
            "GPU compatibility check",
            "Professional installation",
            "Driver setup and updates",
            "Performance testing",
            "Cooling and airflow inspection"
        ],
        featured: false,
        inStock: true
    }
];

// Make globally accessible
window.services = services;

console.log("✅ servicesData.js loaded");
console.log(services);