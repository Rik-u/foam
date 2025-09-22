'use client';

import ItemGrid from "@/views/Admin/ItemGrid";
import * as ItemsDatabase from "@/services/database/ItemsDatabaseController";

export default async function AdminPage() {
    const items = await ItemsDatabase.getItems();

    const handleDelete = async (id : number) => {
        try {
            await ItemsDatabase.deleteItem(id);
        } catch (error) {
            console.error("Failed to delete item:", error);
        }
    };

    return (
        <div className="p-5">
            <div>
                <ItemGrid items={items} onClickDelete={handleDelete}/>
            </div>
        </div>
    );
}