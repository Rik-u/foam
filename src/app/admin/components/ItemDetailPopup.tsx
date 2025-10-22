'use client';

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Item } from "@/app/admin/types"

export default function ItemDetailPopup({ open, item, onCloseItemDetailPopup, onClickUpdateItem }: { open: boolean; item: Item; onCloseItemDetailPopup: () => void; onClickUpdateItem: (formData: Item) => void; }) {
    const [ItemDetailFormData, setItemDetailFormData] = useState<Item>(item)

    useEffect(() => {
        setItemDetailFormData(item);
    }, [item]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setItemDetailFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClickUpdateItem(ItemDetailFormData);
    }

    return (
        <div className={`${open ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/50' : 'hidden'}`}>
            <div className="flex flex-col bg-white p-6 rounded shadow-lg">
                <div className="flex justify-end">
                    <button onClick={onCloseItemDetailPopup} className="cursor-pointer"><X /></button>
                </div>
                <h1>ID : {item.id}</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
                    <label htmlFor="item_name" className="text-sm font-medium text-gray-700">
                        Item Name
                    </label>
                    <input
                        type="text"
                        name="item_name"
                        value={ItemDetailFormData?.item_name}
                        onChange={handleChange}
                        placeholder="Item Name"
                        className="border rounded px-3 py-2"
                        required
                    />

                    <div className="flex gap-1">
                        <div className="flex flex-col">
                            <label htmlFor="current_price" className="text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <input
                                type="number"
                                name="current_price"
                                value={ItemDetailFormData?.current_price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="border rounded px-3 py-2 w-20"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="size" className="text-sm font-medium text-gray-700">
                                Size
                            </label>
                            <select
                                className="border rounded px-3 py-2 grow"
                                name="size"
                                value={ItemDetailFormData?.size}
                                onChange={handleChange}
                            >
                                <option value="">Select size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="stock_quantity" className="text-sm font-medium text-gray-700">
                                Stock
                            </label>
                            <input
                                type="number"
                                name="stock_quantity"
                                value={ItemDetailFormData?.stock_quantity}
                                onChange={handleChange}
                                placeholder="Stock"
                                className="border rounded px-3 py-2 w-20"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="bg-green-400 p-2 px-4 rounded-xl shadow-2xl hover:shadow hover:bg-green-500">Update Item</button>
                </form>
            </div>
        </div>
    );
}