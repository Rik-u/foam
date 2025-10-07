'use client';

import { Item } from "@/models/Item";
import Image from "next/image";

export default function ItemPane({ item, onClickDelete }: { item: Item; onClickDelete: (id: number | null) => void}) {
    return (
        <div className="flex flex-col outline-2 rounded-xl p-3">
            <Image 
                src="/box.svg"
                alt="Box"
                width={100}
                height={100}
                className="mx-auto"
            />
            <p>ID : {item.item_id}</p>
            <p>Name : {item.item_name}</p>
            <p>Price : {item.current_price}</p>
            <p>Stock : {item.stock_quantity}</p>
            <p>Reserved : {item.reserved_quantity}</p>
            <Image
                src="/trash.svg"
                alt="Box"
                width={25}
                height={25}
                className="mx-auto"
                onClick={() => onClickDelete(item.item_id)}
            />
        </div>
    );
}