import React from "react";
import BlogPosts from "./BlogPosts/BlogPosts";
import Hero from "./Hero/Hero";
import InventoryItemsHome from "./InventoryItemsHome/InventoryItemsHome";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <main>
      <Hero />
      <InventoryItemsHome />
      <BlogPosts />
      <WhyChoose />
    </main>
  );
};

export default Home;
