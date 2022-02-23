import React from "react";
import { Link, Outlet } from "react-router-dom";
function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="invoices">Invoices</Link>{" "}
                <Link to="invoices/team">Team</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
export default Dashboard