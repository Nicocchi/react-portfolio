import React, { useState, useEffect, useRef, useMountEffect } from "react";
import logo from "./logo.svg";
import { Navbar, Footer, Landing, About, Experience } from "./components";
import { Container, Button } from "react-bootstrap";

function App() {
    let [pageIndex, setPageIndex] = useState(0);
    const [elements, setElements] = useState([<Landing />, <About />, <Experience />])

    function handleScroll(e) {
        if (e.deltaY >= 0) {
            console.log("DOWN")
            if(pageIndex === 4) {
                console.log(pageIndex);
                return;
            } else {
                let index = pageIndex += 1;
                setPageIndex(index);
            }
            console.log(pageIndex);
        } else {
            if(pageIndex === 0) {
                return;
            } else {
                let index = pageIndex -= 1;
                setPageIndex(index);
            }
            console.log(pageIndex);
        }
    }

    function changePage(e, index) {
        setPageIndex(index);
    }

    return (
        <div id="wrapper" className="bg-grid" onWheel={handleScroll}>
            <div id="wrapper">
                <Navbar pageIndex={pageIndex} changePage={changePage} />
                <div id="main" className="bg-grid">
                    <div id="content">
                        {
                            elements.map((elem, index) => (
                                <div className={pageIndex === index? "show" : "hidden"}>{elem}</div>
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
