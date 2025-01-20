# Spend Bill Gates' Money

A fun and interactive React application that lets users simulate spending Bill Gates' fortune on various items, from everyday products to luxury purchases.

## 🚀 [Live Demo](https://bright-croquembouche-742616.netlify.app/)

## Features

- Real-time balance updates with smooth animations
- Interactive product cards with buy/sell functionality
- Dynamic receipt generation
- Responsive design for all screen sizes
- Input validation and quantity management
- Money formatting in USD

## Project Structure

```
src/
├── components/
│   ├── GatesHeader.jsx
│   ├── GatesProductCard.jsx
│   ├── GatesProductGrid.jsx
│   ├── GatesReceipt.jsx
│   └── SpendGatesMoney.jsx
│   └── GatesContext.jsx
├── utils/
│   ├── formatMoney.js
│   └── productData.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd spend-gates-money
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Environment Setup

No environment variables are required for basic functionality. All product data and images are included in the project.

### Adding New Products

To add new products, modify the `productData.js` file:

1. Add product images to `/public/images/`
2. Add product entry to the `products` array:
```javascript
{
    id: [unique_id],
    name: "Product Name",
    price: 1000,
    image: "/images/product-image.jpg"
}
```

## Features In Detail

### Balance Management
- Uses Context API for global state management
- Smooth animations for balance updates
- Prevents overspending
- Real-time calculations

### Product Interaction
- Buy/Sell buttons
- Manual quantity input
- Input validation
- Dynamic enabling/disabling based on available balance

### Receipt Generation
- Automatic updates
- Shows quantity and total per item
- Calculates total spent
- Only appears when items are purchased

## Styling

The project uses pure CSS with modern features:
- CSS Grid for responsive layouts
- CSS Custom Properties for theming
- Mobile-first approach
- Smooth transitions and animations

## Contact

For any questions or support, please email ahmet.sulu1993@gmail.com
