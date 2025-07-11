# Shop With Us - A Modern Front-End E-Commerce Experience

Shop With Us is a beautifully designed and fully functional e-commerce web application built entirely on the front-end using React and Vite. It demonstrates how to create a rich, interactive shopping experience using modern React features like Hooks and Context for state management, with data persistence handled by the browser's `localStorage`.

This project serves as an excellent template for anyone looking to build a client-side e-commerce platform or practice advanced React concepts.

---

## ✨ Features

-   **Stunning, Modern UI**: A sleek, dark-themed, and fully responsive design built with pure CSS, ensuring it looks great on any device.
-   **Dynamic Product Management**:
    -   Products are loaded from a local data module.
    -   New products added by the "seller" are dynamically added to the application state.
-   **Client-Side Data Persistence**:
    -   The shopping cart's contents are managed with React Context.
    -   **New products added by the seller persist across page reloads** using the browser's `localStorage`.
-   **Complete Shopping Flow**:
    -   Browse products on a responsive grid.
    -   View detailed product information on a dedicated page.
    -   Add/remove items from a functional shopping cart.
    -   "Checkout" simulation that clears the cart and confirms the order.
-   **Interactive User Feedback**: Polished animations and clear visual feedback for actions like adding items to the cart ("Added!").
-   **Seller Page**: A dedicated form for users to add new products to the store, simulating a seller's dashboard.

---

## 🛠️ Tech Stack

-   **Framework**: [React](https://reactjs.org/) (v18 with Hooks)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **State Management**: React Hooks (`useState`, `useEffect`) & Context API (`useContext`)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Styling**: Pure CSS with modern features (Flexbox, Grid, Custom Properties).
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or later recommended)
-   `npm` or `yarn` package manager

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install Dependencies

npm install react-router-dom react-icons


3. Project Structure
The codebase is organized logically with a clear separation of concerns:
src/assets/: For static assets like product images.
src/components/: For reusable UI components (Header, Footer, ProductCard).
src/context/: For the global state management (CartContext).
src/data/: For the initial mock product data.
src/pages/: For top-level page components (HomePage, CartPage, etc.).

4. Run the Development Server
You're all set! Start the Vite development server.
Generated bash
npm run dev


Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal) to see the application live.
🔑 Key Functionality

How It Works (Without a Backend)
Product State: On the initial load, the application loads products from src/data/products.js. It then checks localStorage for any previously added products and merges them into the state.
Adding Products: When you use the "Sell" page to add a product, the new product is added to the React state. A useEffect hook then immediately saves the entire updated product list to localStorage.
Persistence: When you refresh the page, the application state is re-initialized by reading the saved list from localStorage, ensuring your added products don't disappear.
Shopping Cart: The cart's state is managed entirely by the CartContext and lives only in memory during a user's session. It resets on page refresh.