import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from"axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false)

  useEffect(()=>{
    axiosWithAuth()
    .get('api/colors')
    .then(res => setColorList(res.data))
  }, [refresh])

const deleteAColorfunc = (id)=>{
  setColorList(colorList.filter(item => (item.id !== id)))
  setRefresh(!refresh)
}

  return (
    <div  data-testid="l123" className="container">
      <ColorList colors={colorList} deleteAColor={deleteAColorfunc}updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};
console.log("hello world")
export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
