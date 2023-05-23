import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {CarrinhoCompra} from './components/Carrinho/CarrinhoCompra.jsx'
import {Check} from './components/Checkout/Check.jsx'

import { createBrowserRouter,RouterProvider} from 'react-router-dom'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
  },   
  {
    path: 'carrinho/:id?',
    element: <CarrinhoCompra />,
  },
  
  {
    path: 'checkout',
    element: <Check />,
  },

    
    
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
