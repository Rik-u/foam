import ItemGrid from "./components/ItemGrid";
import { getItems } from "@/lib/db/items";

import { ItemType } from "@/types/item";

export default async function AdminPage() {
    const items = await getItems();

    return (
        <div className="p-5">
            <div>
                <ItemGrid initialItems={items} />
            </div>
        </div>
    );
}