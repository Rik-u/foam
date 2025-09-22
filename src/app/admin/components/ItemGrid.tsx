'use client';

import ItemAdd from "./ItemAdd";
import Item from "./Item";
import AddItemPopup from "./AddItemPopup";
import { addItem, deleteItem } from "@/services/database/ItemsDatabaseController";
import { ItemType } from "@/types/item";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";

export default function ItemGrid({ initialItems }: { initialItems: ItemType[] }) {
    const [items, setItems] = useState<ItemType[]>(initialItems);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number | "">("");
    const [size, setSize] = useState("M");
    const [stock, setStock] = useState<number | "">("");
    const [reserved, setReserved] = useState<number | "">("");

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
        const newItem = await addItem({ item_name: "New Item8",
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

    const openAddItemPopup = () => {
        setIsOpen(true);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        await addItem({
            item_name: name,
            current_price: Number(price),
            size,
            stock_quantity: 10,
            reserved_quantity: 0,
        });

        setIsOpen(false); // close modal
        setName("");
        setPrice("");
        setSize("M");
        setStock("");
        setReserved("");

        } catch (error) {
        console.error("Error adding item:", error);
        }
    };


    return (
        <div className="grid grid-cols-5 gap-3">
            {items.map((item) => (
                <Item key={item.item_id} id={item.item_id} title={item.item_name} onClickDelete={handleDelete} />
            ))}
            <ItemAdd onClickAdd={openAddItemPopup}/>

            <AddItemPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h2 className="text-lg font-bold">Add Item</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type = "text"
                    placeholder="Item Name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : "")}
                    className="border p-2 rounded"
                    required
                />
                <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">XL</option>
                </select>
                <input
                    type = "number"
                    placeholder="Stock"
                    value = {stock}
                    onChange = {(e) => setStock(e.target.value ? Number(e.target.value) : "")}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type = "number"
                    placeholder="Reserved"
                    value = {reserved}
                    onChange = {(e) => setReserved(e.target.value ? Number(e.target.value) : "")}
                    className="border p-2 rounded"
                    required
                />
                <button
                type="submit"
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg"
            >
                Add
                </button>
            </form>

            <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
            onClick={() => setIsOpen(false)}
            >
            Confirm
            </button>
            </AddItemPopup>
        </div>
    );
}   