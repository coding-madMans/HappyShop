
import { NextPage } from "next";
import { useEffect } from "react";

const Logout: NextPage = () => {

  useEffect(() => {
    localStorage.removeItem("id");
      setTimeout(() => {
        window.location.href = "/";
    }, 300);
  }, []);

  return <>
  </>
}

export default Logout;
