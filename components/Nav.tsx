/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";

const Nav = () => {

    const [fetchingUser, setFetchingUser] = useState(true);
    const [user, setUser] = useState({id: "", Name: "", Type: "", error: ""});

    useEffect(() => {
        const id = localStorage.getItem("id");
        if(id != null){
            fetch("api/user", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                    },
                body: JSON.stringify({id : id})
            })
            .then(data => {
                return data.json();
            }).then(data => {
                if (data.error != null) {
                    localStorage.removeItem("id");
                }
                setUser(data)
            });
        }
        setFetchingUser(false)
    }, []);

    const search = (e: any) => {
        e.preventDefault();
    };

    if (fetchingUser) {
        return <nav className="navbar">
        <div className="NavBrand"><h1><a href="/">Happy Shop</a></h1></div>
        <form>
            <button className="navSearchButton" onClick={search} >Search</button>
            <input type="text" className="navSearchInput"/>
        </form>
        <div className="navList">
            <ul className="navList">
                <li className="navListItem"><a href="/" className="navListLink">home</a></li>
                <li className="navListItem"><a href="/about" className="navListLink">about</a></li>
            </ul>
        </div>
    </nav>
    } else {
        return <nav className="navbar">
        <div className="NavBrand"><h1><a href="/">Happy Shop</a></h1></div>
        <form>
            <input type="text" className="navSearchInput"/>
            <button className="navSearchButton" onClick={search} >Search</button>
        </form>
        <div className="navList">
            <ul className="navList">
                <li className="navListItem"><a href="/" className="navListLink">home</a></li>
                <li className="navListItem"><a href="/about" className="navListLink">about</a></li>
                {((user.id == undefined) || (user.id == "")) ? 
                    <li className="navListItem"><a href="/login" className="navListLink">Login</a></li>:
                    <>
                        <li className="navListItem"><a href="/cart" className="navListLink">cart</a> {(user as any ).Cart.length}</li>
                        <li className="navListItem"><a href="/signout">signout</a></li>
                        {user.Type == "SuperAdmin"? <li className="navListItem" ><a href="/admin" target="_blank">Admin Panel</a></li>:<></>}
                    </>
                }
            </ul>
        </div>
    </nav>
    }
}

export default Nav;
