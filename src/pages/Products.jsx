import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesBrand =
      brand === "All" || product.brand === brand;

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesBrand && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-bold">
            Our Products
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our collection of authentic premium perfumes
            available for wholesale supply.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Search + Filter */}

          <div className="flex flex-col md:flex-row gap-6 justify-between mb-14">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-xl px-5 py-3 w-full md:w-96 outline-none focus:ring-2 focus:ring-[#C89B3C]"
            />

            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#C89B3C]"
            >
              <option>All</option>
              <option>Khadlaj</option>
              <option>Riiffs</option>
            </select>

          </div>

          {/* Products Grid */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">
                No Products Found
              </h2>

              <p className="mt-4 text-gray-500">
                Try searching with another keyword.
              </p>

            </div>
          )}

        </div>

      </section>

      <ContactCTA />

      <Footer />

    </>
  );
};

export default Products;