
import React from "react";
import { Outlet } from "react-router-dom"
function Invoices() {
    return (
        <div>
            <h1>Invoices</h1>
            <Outlet />
        </div>
    );
}
export default Invoices