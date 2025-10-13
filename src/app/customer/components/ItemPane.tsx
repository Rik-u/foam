import { Item } from "@/models/Item";
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
            <p>{item.current_price}</p>
            <button className="bg-blue-500 rounded-full px-3">Add to cart</button>
        </div>
    );
}