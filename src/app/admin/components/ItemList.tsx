import Image from "next/image";
import { Item } from "@/app/admin/types"

export default function ItemList({ list } : { list : Item[] }) {
    return (
        <div className="grid grid-cols-5 gap-3 m-4">
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