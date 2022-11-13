
import { NextComponentType, NextPageContext } from "next";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = (props: {
  Component: NextComponentType<NextPageContext, any, {}>,
  pageProps: any
}) => {
  return <>
    <Nav></Nav>
    <hr />
    <props.Component {...props.pageProps} />
    <hr />
    <Footer></Footer>
  </>
}

export default Layout;
