'use client';

import ItemAdd from "./ItemAdd";
import Item from "./Item";
import { addItem, deleteItem } from "@/lib/db/items";
import { ItemType } from "@/types/item";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";

export default function ItemGrid({ initialItems }: { initialItems: ItemType[] }) {
    const [items, setItems] = useState<ItemType[]>(initialItems)

    useEffect(() => {
    const newInsert = supabase.channel('custom-insert-channel')
        .on(
            'postgres_changes',
            { event: 'INSERT', schema: 'public', table: 'items' },
            (payload: any) => {
            setItems(prev => [...prev, payload.new]);
            }
        )
        .subscribe()

    const newDelete = supabase.channel('custom-delete-channel')
        .on(
            'postgres_changes',
            { event: 'DELETE', schema: 'public', table: 'items' },
            (payload: any) => {
                if (payload.old) {
                    setItems(prev => prev.filter(item => item.item_id !== payload.old!.item_id));
                }
            }
        )
        .subscribe()
  }, []);

    //Param is Item
    const handleAdd = async () => {
        const newItem = await addItem({ item_name: "New Item7",
                                        current_price: 50, 
                                        size: "XL", 
                                        stock_quantity: 20, 
                                        reserved_quantity: 0})
    };

    const handleDelete = async (id : number) => {
        try {
            await deleteItem(id);
        } catch (error) {
            console.error("Failed to delete item:", error);
        }
    }

    return (
        <div className="grid grid-cols-5 gap-3">
            {items.map((item) => (
                <Item key={item.item_id} id={item.item_id} title={item.item_name} onClickDelete={handleDelete} />
            ))}
            <ItemAdd onClickAdd={handleAdd}/>
        </div>
    );
}