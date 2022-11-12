import Link from "next/link";

const Nav = () => {
  return <nav className="navbar bg-light sticky-top">
    <div className="container-fluid">
      <Link href="#">
        <a className="h1 navbar-brand">Happy Shop</a>
      </Link>
      <form className="d-flex" role="search">
        <input type="search" className="form-control me-2" placeholder="search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav" id="navLinks">
        <li className="nav-item">
          <Link href="#">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#">
            <a className="nav-link">Cart</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#">
            <a className="nav-link">Login</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#">
            <a className="nav-link">Admin Page</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
}

export default Nav;
