'use client';

import ItemGrid from "@/views/Admin/ItemGrid";
import * as ItemsDatabase from "@/services/database/ItemsDatabaseController";
import { Item } from "@/models/Item";

export default async function AdminPage() {
    const items = await ItemsDatabase.getItems();

    const handleDeleteItem = async (id : number) => {
        try {
            await ItemsDatabase.deleteItemById(id);
        } catch (error) {
            console.error("Failed to delete item:", error);
        }
    };

    const handleAddItem = async () => {
        try {
            await ItemsDatabase.addItem(item);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    }

    return (
        <div className="p-5">
            <div>
                <ItemGrid items={items} onClickDelete={handleDeleteItem} onClickAdd={handleAddItem}/>
            </div>
        </div>
    );
}