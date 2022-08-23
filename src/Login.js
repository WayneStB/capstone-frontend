import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import APIUrl from "./APIUrl";
import HomePage from "./HomePage";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Alert, Paper } from "@mui/material";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const isNewUser = searchParams.get("newUser");

    //add useState here
    const login = async (evt) => {
        //make fetch to backend
        evt.preventDefault();

        try {
            const response = await fetch(`${APIUrl}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
                credentials: "include",
            });
            const data = await response.json();
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                navigate("/");
            }
        } catch (error) {
            setError("login Failed. please try again");
            console.error(error);
        }
    };

    return (
        <Paper
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
        >
            <header>Please Log In</header>
            {isNewUser &&
                Alert.window("Your account has been created. please log in")}
            <form onSubmit={login}>
                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        id="username"
                        onChange={(evt) => {
                            setUsername(evt.target.value);
                        }}
                        // hhadd onChange & value to connect to the useState on line 6
                    />
                </div>
                <div>
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(evt) => {
                            setPassword(evt.target.value);
                        }}
                    />
                </div>
                <div>
                    <Button type="submit" className="btn btn-primary">
                        Login
                    </Button>
                    <Link to="/createAccount">Create New account</Link>
                </div>
            </form>
        </Paper>
    );
};

export default Login;
