import React from "react";
import logo from "./logo.svg";
import { Navbar, Footer, Landing } from "./components";
import { Container } from "react-bootstrap";

function App() {
    return (
        <div id="wrapper" className="bg-grid">
            <div id="wrapper">
                <Navbar />
                <div id="main" className="bg-grid">
                    <div id="content">
                        <Landing />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
