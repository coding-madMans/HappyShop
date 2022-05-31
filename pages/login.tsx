
import { NextPage } from "next";
import Router from "next/router";

const Login: NextPage = () => {
    return (
        <div>
            <form method="post" className="LoginForm" onSubmit={async (e) => {
                e.preventDefault();
                const from = e.target as HTMLFormElement;
                let data = {} as any;
                data["Name|Email"] = (from[0] as HTMLInputElement).value;
                data["Password"] = (from[1] as HTMLInputElement).value;
                await fetch("/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)})
                    .then(data => {
                        return data.json()
                    })
                    .then(data => {
                        if (data.success) {
                            console.log(data);
                            localStorage.setItem("id", data.id);
                            setTimeout(() => {
                                setTimeout(() => window.location.reload(), 100);
                                Router.push("/");
                            }, 2000);
                        }else {

                        }
                    })
            }}>
                <input type="text" placeholder="email or username" name="email|username"/><br />
                <input type="password" placeholder="Password" name="password"/><br />
                <button type="submit">Submit</button>
            </form>
            <p>dont have accout <a href="/signup">Sign up</a></p>
        </div>
    );
};

export default Login;
