// Expanded Menu Data
const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: "Spicy rice cakes, serving with fish cake. A popular Korean street food."
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: "Hearty chicken noodle soup with vegetables, green onions, and optional egg."
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: "Mixed rice bowl with assorted vegetables, meat, and gochujang sauce."
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
        desc: "Spicy Sichuan noodles with minced pork and green onions."
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: "Classic Chinese fried rice with eggs, shrimp, and mixed vegetables."
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: "Traditional Japanese rice balls filled with salmon or umeboshi."
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: "Black bean sauce noodles, a beloved Korean-Chinese dish."
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: "Spicy Sichuan-style stir-fried glass noodles with minced meat."
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: "Sweet red bean paste pancakes, a classic Japanese dessert."
    },
    {
        id: 10,
        title: "Kung Pao Chicken",
        category: "China",
        price: 14.99,
        img: "https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/188353BD-9C50-4D76-86E6-A45F525119CF/Derivates/71FB3CEC-4C97-479C-8D6B-354B4EFB513E.jpg",
        desc: "Spicy Sichuan chicken with peanuts, vegetables, and chili peppers."
    },
    {
        id: 11,
        title: "Kimchi Jjigae",
        category: "Korea",
        price: 11.99,
        img: "https://www.eatingwell.com/thmb/uyS7fTbycYvpU_w6coZJDotaca4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Kimchi-jjigae-de45aa8daada45a6b4daf266f0b36011.jpg",
        desc: "Hearty kimchi stew with tofu, pork, and traditional Korean seasonings."
    },
    {
        id: 12,
        title: "Tempura",
        category: "Japan",
        price: 13.99,
        img: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/1-683.webp",
        desc: "Crispy battered and deep-fried seafood and vegetables."
    }
];

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('asiankitchen-theme');
    
    // Apply saved theme or default to light theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Save theme preference
        const currentTheme = document.body.classList.contains('dark-theme') 
            ? 'dark' 
            : 'light';
        localStorage.setItem('asiankitchen-theme', currentTheme);
    });
});

// Get DOM elements
const categoryButtons = document.getElementById('categoryButtons');
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');

// Generate unique categories
const categories = ['All', ...new Set(menu.map(item => item.category))];

// Create category buttons
function createCategoryButtons() {
    categoryButtons.innerHTML = categories.map(category => 
        `<button class="btn" data-category="${category}">${category}</button>`
    ).join('');

    // Add click event to category buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            const selectedCategory = button.dataset.category;
            renderMenuItems(selectedCategory);
        });
    });

    // Set 'All' as default active
    categoryButtons.querySelector('[data-category="All"]').classList.add('active');
}

// Render menu items
function renderMenuItems(category = 'All', searchTerm = '') {
    const filteredMenu = menu.filter(item => 
        (category === 'All' || item.category === category) &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.title}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const activeCategory = document.querySelector('.btn.active').dataset.category;
    renderMenuItems(activeCategory, e.target.value);
});

// Initialize the page
createCategoryButtons();
renderMenuItems();