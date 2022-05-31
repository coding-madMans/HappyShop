import { Images, Tags } from "@prisma/client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

    const [fetchingData, setFetchingData] = useState(true);
    const [data, setData] = useState([{
        id: "",
        Name: "",
        Price: 0,
        Quantity: 0,
        Images: [] as unknown as Images[],
        Tags: [] as unknown as Tags[]
    }]);

    useEffect(() => {
        fetch("/api/Items").then(res => res.json()).then(json => setData(json));
        setTimeout( () => {
            setFetchingData(false);
        }, 1000)
    }, [])

    const renderData = () => {
        if (fetchingData) {
            return <div className="CardContiner">
                <div className={styles.loading}>1</div>
                <div className={styles.loading}>2</div>
                <div className={styles.loading}>3</div>
                <div className={styles.loading}>4</div>
                <div className={styles.loading}>5</div>
                <div className={styles.loading}>6</div>
                <div className={styles.loading}>7</div>
            </div>
        }else{
            return <div>
                {data.map(ele => {return <div key={ele.id} className="dataCard">
                    <h4>{ele.Name}</h4>
                    <img loading="lazy" src={ele.Images[0].Image_URL}></img>
                    <ul>
                        {ele.Tags.map(tag => {return <li key={tag.id}>{tag.Category}</li>})}
                    </ul>
                    price {ele.Price} <br />
                    <button onClick={(btn) => {
                        const cartData = {
                            UserID: localStorage.getItem('id'),
                            ItemID: ele.id,
                            Quantity: 1
                        }
                        fetch("/api/Cart", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(cartData)
                        })
                    }}>Add To Cart</button>
                </div>})}
            </div>
        }
    }

    return renderData();
};

export default Home;
