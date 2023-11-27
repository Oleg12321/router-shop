import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createContext, useState } from "react";
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import MainLayout from './pages/MainLayout'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Posts from "./pages/Posts";

import 'bootstrap/dist/css/bootstrap.min.css';



export const ProductContext = createContext(null)

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/photo/:id',
        element: <SingleProduct />
      },
      {
        path: '/posts',
        element: <Posts />
      }
    ]
  }
])

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div>
      <ProductContext.Provider value={{ selectedPhoto, setSelectedPhoto }}>
        <RouterProvider router={router} />
      </ProductContext.Provider>
    </div>
  );
}

export default App
