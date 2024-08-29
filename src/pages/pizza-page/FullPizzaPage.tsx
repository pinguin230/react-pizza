import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {IPizzaItem} from "../../store/redusers/pizza/IPizza.ts";

const FullPizzaPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IPizzaItem>()


  const getPizzaById = async () =>  {
    try {
      const response = await axios.get(`https://66b0c0f36a693a95b53a107f.mockapi.io/items/${id}`)
      setData(response.data)
    } catch (e){
      console.error("Error", e)
      alert("Піцу не знайдено")
      navigate("/")
    }
  }

  useEffect(() => {
    getPizzaById()
  }, []);

  return (
      <div className="container">
        { data &&
          <>
            <img style={{height: 233, width: 233}} src={data.imageUrl} alt=""/>
            <h1>{data.title}</h1>
            <h2>Ціна: {data.price}  ₴</h2>
          </>

        }
      </div>
  );
};

export default FullPizzaPage;