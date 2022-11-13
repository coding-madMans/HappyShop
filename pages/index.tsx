/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import AppContext from '../components/context/AppContext';

import Card from '../components/Card';
import item from "./api/app.types";
import { Cart } from '@prisma/client';

const Index: NextPage = () => {

  const [appData, setAppData] = useContext(AppContext);

  const addToItems = (item: item) => {
    setAppData(prevState => {
      return (
        {
          ...prevState,
          items: [...prevState.items, item]
        }
      )
    });
  };

  useEffect (() => {
    const id = localStorage.getItem("id");
    if (id != null) {
      fetch("/api/user/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id: id})
      }).then((res) => {
        return res.json()
      }).then((data:{
        id: string;
        Name: string;
        Type: string;
        Cart: Cart[];
      }) => {
        console.log(data);
        const userType = data.Type == "SuperAdmin"? true : false;
        setAppData(prevState => {
          return (
            {
              ...prevState,
              isLoggedin: true,
              user: {
                id: data.id,
                Name: data.Name,
                Type: data.Type
              },
              isAdmin: userType
            }
          );
        });
      })
    }else{
      setAppData(prevState => {
        return (
          {
            ...prevState,
            isLoggedin: false,
            user: null,
            isAdmin: false
          }
        )
      })
    }

    if (appData.items.length == 0) {
      fetch("/api/Items")
      .then((response) => {
        return response.json()
      }).then((data:  item[])=> {
        data.forEach((item => {
          addToItems(item);
        }));
      });
    }
    console.log(appData.items);
  }, []);

  return <div>
    <div className="row">
      {
        appData.items.map(ele => {
          return <Card 
            key={ele.id} 
            id={ele.id}
            item={ele}
          />
        })
      }
    </div>
  </div>
}

export default Index;
