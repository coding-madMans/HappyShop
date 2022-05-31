
import { NextComponentType, NextPageContext } from "next";
import Footter from "./Footter";
import Nav from "./Nav";

const Layout = (props: {
    Component: NextComponentType<NextPageContext, any, {}>,
    pageProps: any
}) => {
    return <>
        <Nav></Nav>
        <props.Component {...props.pageProps} />
        <Footter></Footter>
    </>
}

export default Layout;
