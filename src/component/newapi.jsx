import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import activecard from "./activecard";

const Newapi = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get('https://api.adviceslip.com/advice')
    .then(response =>setData(response.data.slip));
    console.log(data);
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Newapi
