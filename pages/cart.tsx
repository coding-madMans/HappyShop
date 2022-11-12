/* eslint-disable @next/next/no-html-link-for-pages */

import { Item } from "@prisma/client";
import { useEffect, useState } from "react";

const CartInfo = () => {

    const [fetchingCart, setFetchingCart] = useState(true);
    const [cart, setCart] = useState({
        data: [
            {
                id: "",
                Item_id: {} as Item,
                Quantity: 0
            }
        ]
    });

    useEffect(() => {
        const id = localStorage.getItem("id");
        if(id != null){
            fetch("api/Cart/" + id)
            .then(data => {
                return data.json();
            }).then(data => {
                if (data.error != null) {
                    localStorage.removeItem("id");
                }
                setCart(data)
            });
        }
        setTimeout(() => {
            setFetchingCart(false)
        }, 600)
    }, []);

    // operation: string, id: string
    const addAndRemoveItems = (e: any) => {
        const target = e.target;
        const id :string = target.id;
        const operation :string = target.innerText;
        // console.log(id, operation);
        fetch("api/Cart/" + id, {
            method: "PATCH",
            body: JSON.stringify({
                "operation": operation
            })
        }).then(response => {
            console.log("from UPDATE : " + response);
            console.log(response);
        }).catch(err => {
            console.log("error" + err);
        });
    }

    if (fetchingCart) {
        return <div>
            fetching
        </div>
    } else {
        return <div>
            <table className="buyTable">
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Modify</th>
                </tr>
                {cart.data.map(ele => {
                    return <tr key={ele.id}>
                        <td>{ele.Item_id.Name}</td>
                        <td>{ele.Item_id.Price}</td>
                        <td>{ele.Quantity}</td>
                        <td>{ele.Item_id.Price * ele.Quantity}</td>
                        <td>
                            <button id={ele.id} onClick={addAndRemoveItems}>-</button>
                            {ele.Quantity}
                            <button id={ele.id} onClick={addAndRemoveItems}>+</button>
                        </td>
                    </tr>
                })}
            </table>
            <button><a href="/buy">buy</a></button>
        </div>
    }
}

export default CartInfo;
