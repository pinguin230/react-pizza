import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {IPizzaItem} from "../../store/redusers/pizza/IPizza.ts";

const FullPizzaPage: FC = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IPizzaItem>()
  const typeNames = ["тонка", "традиційна"]
  const [type, setType] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    isLoading && setType(data.types.map((price) => `${typeNames[price]} - `).join(' '));
  }, [data, isLoading]);


  const getPizzaById = async () =>  {
    try {
      const response = await axios.get(`https://66b0c0f36a693a95b53a107f.mockapi.io/items/${id}`)
      setData(response.data)
      setIsLoading(true)
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
            <h2>Розмір: {data.sizes.join(' см - ')}  см</h2>
            <h2>Ціна: {data.price.join(' - ')}  ₴</h2>
            <h2>Основа: {type.slice(0, -3)}</h2>

          </>

        }
      </div>
  );
};

export default FullPizzaPage;