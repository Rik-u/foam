'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

type Item = {
    id: number,
    item_name: string,
    current_price: number,
    size: string,
    stock_quantity: number
};

export default function ItemManagementForm() {
    const [list, setList] = useState<Item[]>([]);

    // TODO remove on API connection

    const testData = [{ id: 1, item_name: "Box A", current_price: 10, size: "S", stock_quantity: 10 },
        { id: 2, item_name: "Box B", current_price: 20, size: "M", stock_quantity: 20 },
        { id: 3, item_name: "Box C", current_price: 30, size: "L", stock_quantity: 30 },
    ]

    //Get data on mount
    // HACK replace with getData(); on API connection
    useEffect(() => {
        setList(testData); 
    }, []);

    const getData = () => {
        fetch("http://localhost:3000/admin/ItemManagement")
        .then(response => response.json())
        .then(data => setList(data));
    }

    return (
        <div className="grid grid-cols-5 gap-3">
            {list.map(item => (
                <div key={item.id} className="outline-2 rounded-xl p-3">
                    <Image 
                        src="/box.svg"
                        alt="Box"
                        width={100}
                        height={100}
                        className="mx-auto"
                    />
                    <p>ID : {item.id}</p>
                    <p>{item.item_name}</p>
                    <p>{item.current_price} ฿</p>
                    <p>Size : {item.size}</p>
                    <p>Stock : {item.stock_quantity}</p>
                </div>
            ))}
        </div>
    );
}