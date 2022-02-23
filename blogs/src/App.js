import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "./dashboard";
import Team from "./team";
import Invoice from "./invoice";
import Invoices from "./invoices";
import logo from "./logo.svg";
import "./App.css";
// import { Button } from "button-react-package";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Button label="hii" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const defaultHistory = createBrowserHistory();
function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// function Invoices() {
//   return (
//     <div>
//       <h1>Invoices</h1>
//       <Outlet />
//     </div>
//   );
// }

// function Invoice() {
//   // let { invoiceId } = useParams();
//   return <h1>Invoice </h1>;
// }

// function SentInvoices() {
//   return <h1>Sent Invoices</h1>;
// }
export default App;
