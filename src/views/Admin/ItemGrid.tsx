'use client';

import { Item } from "@/models/Item";
import ItemPane from "./ItemPane";

export default function ItemGrid({ items, onClickDelete } : { items: Item[]; onClickDelete: (id: number) => void}) {
    return (
        <div className="grid grid-cols-5 gap-3">
            {items.map((item) => (
                <ItemPane key={item.item_id} item={item} onClickDelete={onClickDelete} />
            ))}
        </div>
    )
}