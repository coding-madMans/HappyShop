/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useContext } from "react";
import AppContext from "./context/AppContext";

import { Images, Tags } from "@prisma/client";
import item from "../pages/api/app.types";

const Card = ({
  id,
  item
}:{
  id: string,
  item: item
}) => {

  const [appData, setAppData] = useContext(AppContext);

  const addToCart = () => {
    setAppData(prevState => {
      return (
        {
          ...prevState,
          cart: [...prevState.cart,
            id
          ]
        }
      )
    })
  };

  return <div className="card col-sm-2">
    <img
      src={item.Images[0].Image_URL}
      className="card-img-top"
      alt="..."
      height={150}
      width={150}
    />
    <div className="card-body">
      <h5 className="card-title">{item.Name}</h5>
      <h6>price : {item.Price}</h6>
      {item.Tags.map(tag => {return <h6 key={tag.id}>{tag.Category}</h6>})}
      <button 
        className="btn btn-primary"
        onClick={addToCart}
      >add to cart</button>
    </div>
  </div>
}

export default Card;
