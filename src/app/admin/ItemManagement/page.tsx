'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

type Item = {
    id: number,
    name: string,
    price: number
};

export default function ItemManagementForm() {
    const [list, setList] = useState<Item[]>([]);

    // TODO remove on API connection

    const testData = [{ id: 1, name: "Box A", price: 10 },
    { id: 2, name: "Box B", price: 20 },
    { id: 3, name: "Box C", price: 30 },
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
                <div key={item.id} className="outline-2 rounded-xl p-3 h-55">
                    <Image 
                        src="/box.svg"
                        alt="Box"
                        width={100}
                        height={100}
                        className="mx-auto"
                    />
                    <p>ID : {item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.price} ฿</p>
                </div>
            ))}
        </div>
    );
}