'use client';

import { useState, useEffect } from "react";

import Item from "@/types/Item"
import { getItems } from "@/libs/API/ItemsAPI";

import ItemGrid from "./components/ItemGrid";

export default function CustomerPage() {
    const [list, setList] = useState<Item[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getItems();
                displayList(data);
            } catch (err) {
                console.error("Failed to fetch data");
            }
        } 

        getData();
    }, []);

    const displayList = (items : Item[]) => {
        setList(items)
    }

    return (
        <div>
            <ItemGrid items={list}/>
        </div>
    );
}