import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import ProductCardList from "./components/ProductCardList";
import Images from "./image";
import { api } from "./helpers/api";
import config from "./helpers/config";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    products: [],
    dataLoader: false,
    dataError: null,
  });
  //get data of google sheets
  useEffect(() => {
    const getData = async () => {
      setState({ ...state, dataLoader: true });
      try {
        const { data } = await api.get(
          `/values:batchGet?ranges=Hoja 1&majorDimension=ROWS&key=${config.apiKey}`
        );
        setState({
          ...state,
          dataLoader: false,
          products: data.valueRanges[0].values.slice(1),
        });
        console.log(data.valueRanges[0].values);
      } catch (e) {
        setState({ ...state, dataError: "Ah ocurrido un problema" });
        console.log(state.dataError);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Slider images={Images} />
      <ProductCardList products={state.products} title="Productos destacados" />
    </>
  );
};

export default App;
