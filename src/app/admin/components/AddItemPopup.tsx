'use client';

import { useState } from "react";
import { X } from "lucide-react";
import { Item } from "@/app/admin/types"

export default function AddItemPopup({ onCloseNewItemPopup, onClickAddItem, open } : { onCloseNewItemPopup: () => void; onClickAddItem: (formData : Omit<Item, "id">) => void ;open : boolean; }) {
    const [formData, setFormData] = useState<Omit<Item, "id">>({
        item_name: '',
        current_price: 0,
        size: '',
        stock_quantity: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClickAddItem(formData);
    }

    return (
        <div className={`${open ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/50' : 'hidden'}`}>
            <div className="flex flex-col bg-white p-6 rounded shadow-lg">
                <div className="flex justify-end">
                    <button onClick={onCloseNewItemPopup} className="cursor-pointer"><X /></button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
                    <label htmlFor="item_name" className="text-sm font-medium text-gray-700">
                        Item Name
                    </label>
                    <input 
                            type="text"
                            name="item_name"
                            value={formData?.item_name}
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
                                value={formData?.current_price}
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
                                value={formData?.size}
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
                                value={formData?.stock_quantity}
                                onChange={handleChange}
                                placeholder="Stock"
                                className="border rounded px-3 py-2 w-20"
                                required
                            />
                        </div>
                    </div>

                        <button type="submit" className="bg-green-400 p-2 px-4 rounded-xl shadow-2xl hover:shadow hover:bg-green-500">Add Item</button>
                </form>
            </div>
        </div>
    );
}