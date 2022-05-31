
import { NextPage } from "next";
import Router from "next/router";
import { Md5 } from "ts-md5";

const SignUp : NextPage = () => {
    return (
        <div>
            <form method="post" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                let data = {} as any;
                data["Name"] = (form[0] as HTMLInputElement).value;
                data["Email"] = (form[1] as HTMLInputElement).value;
                data["Contact"] = (form[2] as HTMLInputElement).value;
                data["DOB"] = (form[3] as HTMLInputElement).value;
                data["Password"] = (form[4] as HTMLInputElement).value;
                console.log(data);
                await fetch("/api/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)})
                    .then(data => {
                        console.log(data);
                        return data.json();
                    })
                    .then(data => {
                        setTimeout(() => {Router.push("/login")}, 5000);
                    })
                    .catch(err => {console.error(err);});
            }}>
                <input type="text" placeholder="Username" name="username"/><br />
                <input type="email" placeholder="Email" name="email"/><br />
                <input type="text" placeholder="Contact no" name="contactNo"/><br />
                <input type="date" placeholder="Date of Birth" name="date"/><br />
                <input type="password" placeholder="Password" name="password"/><br />
                <input type="password" placeholder="Password" name="password2"/><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUp;

