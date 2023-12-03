// import { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import About from "./pages/About";
import Store from "./pages/Store";
import { ShoppingCartProv } from "./context/CartContext";
import NotFound from "./pages/NotFound";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="store" element={<Store />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <ShoppingCartProv>
      <RouterProvider router={router} />
    </ShoppingCartProv>
  );
}

export default App;
