import React from "react";
import Slider from "./components/Slider";
import ProductCardList from "./components/ProductCardList";
import Images from "./image";
import "./App.css";

function App() {
  return (
    <>
      <Slider images={Images} />
      <ProductCardList title="Productos destacados" />
    </>
  );
}

export default App;
