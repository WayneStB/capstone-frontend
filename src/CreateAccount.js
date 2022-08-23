import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import APIUrl from "./APIUrl";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const CreateAccount = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    //add useState here
    const CreateAccount = async (evt) => {
        //make fetch to backend
        evt.preventDefault();

        try {
            const response = await fetch(`${APIUrl}/createAccount`, {
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
                navigate("/login?newUer=true");
            }
        } catch (error) {
            setError("CreateAccount Failed. please try again");
            console.error(error);
        }
    };

    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
        >
            <header>Please Log In</header>

            <form onSubmit={CreateAccount}>
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
                        CreateAccount
                    </Button>
                </div>
            </form>
        </Paper>
    );
};

export default CreateAccount;
