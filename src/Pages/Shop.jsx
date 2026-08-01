import { useState } from "react";

import products from "../Data/Products";

import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";
import PageTransition from "../Components/Comman/PageTransition";

import ShopHero from "../Components/Shop/ShopHero";
import SearchBar from "../Components/Shop/SearchBar";
import CategoryFilter from "../Components/Shop/CategoryFilter";
import ProductGrid from "../Components/Shop/ProductGrid";

import Pagination from "../Components/Shop/Pagination";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageTransition>
      <Navbar />

      <ShopHero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <ProductGrid
        products={products}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={5}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </PageTransition>
  );
};

export default Shop;