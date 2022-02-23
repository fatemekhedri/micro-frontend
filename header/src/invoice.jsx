import React from "react";
import { useParams } from "react-router-dom"
function Invoice() {
    let { invoiceId } = useParams();
    return <h1>Invoice {invoiceId} </h1>;
}

export default Invoice