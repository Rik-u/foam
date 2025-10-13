'use client';

import { Item } from "@/models/Item";
import Image from "next/image";

export default function ItemAdd({ onClickAdd } : { onClickAdd: () => void }) {
    return (
        <div className="flex outline-2 outline-dashed rounded-xl p-3" onClick={onClickAdd}>
            <Image 
                src="/plus-circle.svg"
                alt="Plus"
                width={60}
                height={60}
                className="m-auto"
            />
        </div>
    );
}