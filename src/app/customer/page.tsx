'use client';
import Image from "next/image";

import ItemGrid from "./components/ItemGrid";
import SearchBar from "./components/SearchBar";
import * as ItemDatabase from "@/services/database/ItemsDatabaseController"

export default async function CustomerPage() {
    const items = await ItemDatabase.getItems();
    
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