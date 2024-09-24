import { useState } from 'react'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Contexts/AuthContext'
// import Auth from './components/Auth'
import Products from './components/Products'
import { ProductProvider } from './Contexts/ProductContext'
import { CartProvider } from './Contexts/CartContext'
import Layout from './components/Layout'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        // {
        //   path: "",
        //   element: <Header />,
        // },
        {
          path: "",
          element: <Products />
        },
        // {
        //   path: "auth",
        //   element: <Auth />
        // },
        {
          path: "product/:productId",
          element: <ProductDetails />
        },
        {
          path: "cart",
          element: <Cart />
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {

      path: "/signup",
      element: <Signup />,
    }

  ])
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>

            <RouterProvider router={router} />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  )
}

export default App
