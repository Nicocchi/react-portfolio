import React, { useState } from "react";
import { Navbar, Footer, Landing, About, Experience } from "./components";

function App() {
    let [pageIndex, setPageIndex] = useState(0);
    const [elements] = useState([<Landing />, <About />, <Experience />]);

    function handleScroll(e) {
        if (e.deltaY >= 0) {
            if (pageIndex === 4) {
                return;
            } else {
                let index = (pageIndex += 1);
                setPageIndex(index);
            }
        } else {
            if (pageIndex === 0) {
                return;
            } else {
                let index = (pageIndex -= 1);
                setPageIndex(index);
            }
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
                        {elements.map((elem, index) => (
                            <div className={pageIndex === index ? "show" : "hidden"}>{elem}</div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
