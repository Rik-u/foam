'use client';
import Image from "next/image";

import ItemGrid from "./components/ItemGrid";
import SearchBar from "./components/SearchBar";

import { useState, useEffect } from "react";
import { ItemType } from "./types";

export default function CustomerPage() {

    //Temp Local array for prototype
    const [items, setItems] = useState<ItemType[]>(() => {
        if (typeof window === "undefined") return []; // SSR safety
        const saved = localStorage.getItem("items");
        return saved ? JSON.parse(saved) : [];
    });


    useEffect(() => {
            localStorage.setItem("items", JSON.stringify(items));
        }, [items]);

    return (
        <div className="p-5">
            <div className="flex flex-row justify-center my-5 gap-1">
                <div className="w-1/2">
                    <SearchBar />
                </div>
                <Image src="/filter.svg" alt="Filter" width={20} height={20} />
                <Image src="/cart.svg" alt="Cart" width={20} height={20} />
            </div>
            <div>
                <ItemGrid items={items} />
            </div>
        </div>
    );
}