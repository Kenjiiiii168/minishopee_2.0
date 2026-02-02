# Mini-Shopee React App

A simple e-commerce application built with React, Vite, TypeScript, and Tailwind CSS.

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── CartItem.tsx    # Cart row item
│   ├── Navbar.tsx      # Navigation bar with cart badge
│   └── ProductCard.tsx # Product display card
├── context/            # State management
│   └── CartContext.tsx # Context + Reducer for Cart logic
├── data/               # Mock data
│   └── products.ts     # Products array
├── pages/              # Route pages
│   ├── Cart.tsx        # Cart page with totals
│   └── ProductList.tsx # Home page with product grid
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main layout and routing
├── main.tsx            # Entry point
└── index.css           # Tailwind imports
```

## 🚀 How to Run

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🛒 Logic & Features

### State Management (Context + Reducer)
- **State**: Holds `items` array.
- **Reducer Actions**: `ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_QUANTITY`, `CLEAR_CART`.
- **Persistence**: Uses `localStorage` in `useEffect` to save state on change, and initializes state from it.
- **Validation**:
    - Prevents adding more than available stock.
    - Prevents negative quantity (removes item if quantity goes to 0 or less).

### Totals Calculation
- **Subtotal**: Sum of `price * quantity`.
- **Discount**: 10% off if subtotal > 5000 THB.
- **Shipping**: Flat 50 THB (free if cart is empty).
- **Grand Total**: `Subtotal - Discount + Shipping`.

## 🛠 Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router Dom v7
- Lucide React (Icons)
