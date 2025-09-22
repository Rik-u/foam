'use client';

import { Item } from "@/models/Item";
import ItemPane from "./ItemPane";
import ItemAdd from "./ItemAdd";

export default function ItemGrid({ items, onClickDelete, onClickAdd } : { items: Item[]; onClickDelete: (id: number) => void; onClickAdd: () => void}) {
    return (
        <div className="grid grid-cols-5 gap-3">
            {items.map((item) => (
                <ItemPane key={item.item_id} item={item} onClickDelete={onClickDelete} />
            ))}
            <ItemAdd onClickAdd={onClickAdd}/>
        </div>
    )
}