'use client';

import Order from "@/types/Order";
import { useState } from "react";

export default function OrderList( { 
    list,
} : {
    list : Order[];
} ) {

    //TODO : Pull total amount from invoice
    return (
        <div className="flex flex-col m-4 gap-2">
            {list.map(order => (
                <div key={order.orderId} className="outline-2 rounded-xl p-3" >
                    <p>ID : {order.orderId}</p>
                    <p>Address : {order.address}</p>
                    <p>Date : {String(order.orderDate)}</p>
                    <p>Tracking No. : {order.trackingNo}</p>
                    <p>Status : {order.status}</p>
                    <p>Total Amount : 100</p>
                </div>
            ))}
        </div>
    );
}