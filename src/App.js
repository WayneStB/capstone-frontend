import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CreateAccount from "./CreateAccount";

import Login from "./Login";
import Layout from "./Layout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Layout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/createAccount"
                            element={<CreateAccount />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
