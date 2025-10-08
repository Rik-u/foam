'use client';

import { useEffect, useState } from "react";
import { Item } from "@/app/admin/types"
import ItemList from "../components/ItemList";
import TopBar from "../components/TopBar";

export default function ItemManagementForm() {
    const [list, setList] = useState<Item[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // TODO remove on API connection
    const testData = [{ id: 1, item_name: "Box A", current_price: 10, size: "S", stock_quantity: 10 },
        { id: 2, item_name: "Box B", current_price: 20, size: "M", stock_quantity: 20 },
        { id: 3, item_name: "Box C", current_price: 30, size: "L", stock_quantity: 30 },
    ]

    //Get data on mount
    // HACK replace with getData(); on API connection
    useEffect(() => {
        displayList(testData); 
    }, []);

    // TODO Change API route
    const getData = async () => {
        const response = await fetch("http://localhost:3000/admin/ItemManagement");
        const data = await response.json();
        displayList(data)
    }

    const displayList = (items : Item[]) => {
        setList(items)
    }

    const checkNULL = (query : string) => {
        if (query == null || query == '') {
            return true;
        }
        return false;
    }

    const openNewItemPopup = () => {

    }

    const closeNewItemPopup = () => {

    }

    // TODO Change API route
    const search = async (query : string) => {
        if (checkNULL(query)) {
            return;
        }
        const response = await fetch(`http://localhost:3000/admin/ItemManagement?search=${query}`);
        const data = await response.json();
        displayList(data)
    }

    return (
        <div>
            <TopBar onSearch={search} onOpenNewItemPopup={openNewItemPopup}/>
            <ItemList list={list}/>
        </div>
    );
}