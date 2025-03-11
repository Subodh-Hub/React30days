import React, { useState } from "react";
import Navigation from "./Navbar/Navigation";
import Products from "./Product/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";
const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  // input Filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterdData = (products, selected, query) => {
    let filteredProduct = products;

    // filtering input items
    if (query) {
      filteredProduct = filteredProducts;
    }

    // selected filter
    if (selected) {
      filteredProduct = filteredProduct.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProduct.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      },ind) => (
        <Card
          key={ind}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          company={company}
          color={color}
          category={category}
        />
      )
    );
  };

  const result = filterdData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default App;
