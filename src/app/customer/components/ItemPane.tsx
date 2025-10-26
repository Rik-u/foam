'use client';

import Item from "@/types/Item";
import Image from "next/image";

export default function ItemPane({ item } : {item : Item}) {
    return (
        <div className="outline-2 rounded-xl p-3">
            <Image 
                src="/box.svg"
                alt="Box"
                width={100}
                height={100}
                className="mx-auto"
            />
            <p>{item.item_name}</p>
            <p>Price : {item.current_price} ฿</p>
            <p>In stock : {item.stock_quantity}</p>
        </div>
    );
}