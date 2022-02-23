import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_HEADER_HOST: headerHost,
  REACT_APP_BLOGS_HOST: blogHost,
  REACT_APP_NEXT_HOST: nextHost,
} = process.env;

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

function Blogs({ history }) {
  return <MicroFrontend history={history} host={blogHost} name="Blogs" />;
}
function ButtonNextApp({ history }) {
  return <MicroFrontend history={history} host={nextHost} name="Blogs" />;
}

function BlogDetail({ history }) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}

function Home({ history }) {
  return (
    <div className="container">
      <Header />
      <Blogs />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogdetail/:blogid" element={BlogDetail} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
