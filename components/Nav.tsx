/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";

const Nav = () => {

  const [appData, setAppData] = useContext(AppContext);

  useEffect (()=> {
    console.log(appData)
  }, []);

  return<>
    <Head>
        <title>Happy Shop</title>
    </Head>
    <nav className="navbar bg-light sticky-top">
      <div className="container-fluid">
        <Link href="/">
          <a className="h1 navbar-brand">Happy Shop</a>
        </Link>
        <form className="d-flex" role="search">
          <input type="search" className="form-control me-2" placeholder="search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul className="navbar-nav" id="navLinks">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cart">
              <a className="nav-link">Cart ({appData.cart.length}) </a>
            </Link>
          </li>
          {
            appData.isLoggedin ? (
              <li className="nav-item">
                <Link href="/logout">
                  <a className="nav-link">Logout</a>
                </Link>
              </li>
              
            ): (
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link">Login</a>
                </Link>
              </li>
            )
          }
          <li className="nav-item">
            <Link href="#footer">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
          {
            appData.isAdmin ? (
              <li className="nav-item">
                <Link href="/admin">
                  <a className="nav-link" target="_blank">Admin Page</a>
                </Link>
              </li>
            ):(<></>)
          }
        </ul>
      </div>
    </nav>
  </> 
  
}

export default Nav;
