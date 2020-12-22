import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
require("dotenv").config();

const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    space: process.env.REACT_APP_SPACE,
});

ReactDOM.render(
    <ContentfulProvider client={contentfulClient}>
        <App />
    </ContentfulProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
