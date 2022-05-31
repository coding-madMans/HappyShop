
import { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";

const SignOut: NextPage = () => {

    useEffect(() => {
        localStorage.removeItem("id");
        setTimeout(() => {
            setTimeout(() => window.location.reload(), 100);
            Router.push("/");
        }, 2000);
    }, []);

    return <></>
}

export default SignOut;
