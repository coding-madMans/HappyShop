
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

    if (fetchingCart) {
        return <div>
            fetching
        </div>
    } else {
        return <div>
            <table>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {cart.data.map(ele => {
                    return <tr key={ele.id}>
                        <td>{ele.Item_id.Name}</td>
                        <td>{ele.Item_id.Price}</td>
                        <td>{ele.Quantity}</td>
                        <td>{ele.Item_id.Price * ele.Quantity}</td>
                    </tr>
                })}
            </table>
            <form onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const selectedValue = {paymentType: (form[0] as HTMLSelectElement).value}
                alert(selectedValue.paymentType)
            }}>
                <label htmlFor="paymentType">Payment Type</label><select name="paymentType" id="paymentType">
                    <option value="UPI">UPI</option>
                    <option value="Online Banking">Online Banking</option>
                </select>
                <button type="submit">Pay</button>
            </form>
        </div>
    }
}

export default CartInfo;
