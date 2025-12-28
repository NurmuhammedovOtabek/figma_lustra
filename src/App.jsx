import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainLayout = lazy(() => import("./layout/MainLayout"));
const Home = lazy(() => import("./pages/home"));
const Basket = lazy(() => import("./pages/Basket"));
const About = lazy(() => import("./pages/About"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Return = lazy(() => import("./pages/Return"));
const Garant = lazy(() => import("./pages/Garant"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Detail = lazy(() => import("./pages/Detail"));
const Favorites = lazy(() => import("./pages/Favorites"));
const NotFound = lazy(() => import("./pages/NotFoun"));


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="about" element={<About />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="return" element={<Return />} />
        <Route path="garant" element={<Garant />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="allproduct" element={<AllProducts />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="detail" element={<Detail />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
