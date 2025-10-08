'use client';

import { useEffect, useState } from "react";
import { Item } from "@/app/admin/types"
import ItemList from "../components/ItemList";
import TopBar from "../components/TopBar";

export default function ItemManagementForm() {
    const [list, setList] = useState<Item[]>([]);

    // TODO remove on API connection

    const testData = [{ id: 1, item_name: "Box A", current_price: 10, size: "S", stock_quantity: 10 },
        { id: 2, item_name: "Box B", current_price: 20, size: "M", stock_quantity: 20 },
        { id: 3, item_name: "Box C", current_price: 30, size: "L", stock_quantity: 30 },
    ]

    //Get data on mount
    // HACK replace with getData(); on API connection
    useEffect(() => {
        setList(testData); 
    }, []);

    const getData = () => {
        fetch("http://localhost:3000/admin/ItemManagement")
        .then(response => response.json())
        .then(data => setList(data));
    }

    return (
        <div>
            <TopBar />
            <ItemList list={list}/>
        </div>
    );
}