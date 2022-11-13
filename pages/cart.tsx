/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import AppContext from '../components/context/AppContext';


const CartPage: NextPage = () => {

  const [appData, setAppData] = useContext(AppContext);

  const {cart, items} = appData;

  const cartCal = [] as {id: string, quantity: number, name: string, price: number, total: number}[];

  const [cartDat, setcartDat] = useState<{id: string, quantity: number, name: string, price: number, total: number}[]>([]);
  
  const getIndexOfItem = (id: string):number => {
    for (let i = 0; i < appData.items.length; i++) {
      if (appData.items[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  let calculated = false;

  useEffect(() => {
    cart.forEach((id,index) => {
      let added = false;
      for (let i = 0; i < cartCal.length; i++ ) {
        if (cartCal[i].id == id) {
          cartCal[i].quantity += 1;
          cartCal[i].total = cartCal[i].price * cartCal[i].quantity;
          added = true;
          break;
        }
      }
      if (!added) {
        const ind = getIndexOfItem(id);
        if (ind == -1) {
          return;
        }
        cartCal.push({
          id, 
          quantity: 1,
          name: appData.items[ind].Name,
          price: appData.items[ind].Price,
          total: appData.items[ind].Price * 1
        });
      }
    }
    )
    setTimeout( () => {
      console.log(cartCal);
      setcartDat((prevState) => {
        return cartCal;
      })
    }, 300);
  }, []);

  console.log(appData);

  return (
    <div>
      <table className="table table-success table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        {
          cartDat.map((dat, index) => {
            return (<tr key={dat.id}>
              <td>{index}</td>
              <td>{dat.name}</td>
              <td>{dat.price}</td>
              <td>
                <button className="btn btn-small btn-success"> + </button> 
                {dat.quantity} 
                <button className="btn btn-small btn-danger"> - </button> 
              </td>
              <td>{dat.total}</td>
            </tr>)
          })
        }
      </table>
    </div>
  )
}

export default CartPage;
