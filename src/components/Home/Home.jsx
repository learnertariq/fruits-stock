import React from "react";
import BlogPosts from "./BlogPosts/BlogPosts";
import Hero from "./Hero/Hero";
import InventoryItemsHome from "./InventoryItemsHome/InventoryItemsHome";

const Home = () => {
  return (
    <main>
      <Hero />
      <InventoryItemsHome />
      <BlogPosts />
    </main>
  );
};

export default Home;
