'use client';
import ItemGrid from "./components/ItemGrid";
//Temp
import { useState , useEffect } from "react";
import { ItemType } from "./types";

export default function AdminPage() {
    //Temp Local array for prototype
    const [items, setItems] = useState<ItemType[]>(() => {
        if (typeof window === "undefined") return []; // SSR safety
        const saved = localStorage.getItem("items");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    //Temp function to add item
    const addItem = () => {
        const newId = Date.now()
        setItems([...items, { id: newId, title: `Item ${newId}` }]);
    };
    //Temp delete
    const deleteItem = (id: number) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems)); // persist
    }

    return (
        <div className="p-5">
            <div>
                <ItemGrid items={items} onClickAdd={addItem} onClickDelete={deleteItem}/>
            </div>
        </div>
    );
}