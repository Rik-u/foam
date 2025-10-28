import CartItem from "@/types/Cart";
import Image from "next/image";

import { X } from "lucide-react";

export default function CartPopup({
    cart,
    onCloseCartPopup
}: {
    cart: CartItem[];
    onCloseCartPopup : () => void;
}) {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
            <div className="bg-white p-6 rounded shadow-lg">
                <div className="flex justify-end mb-2">
                    <button onClick={onCloseCartPopup} className="cursor-pointer"><X /></button>
                </div>
                <div className="grid grid-cols-5 gap-3 m-4">
                    {cart.map(({ item, amount }) => (
                        <div key={item.id} className="border-2 rounded-xl p-3">
                            <Image
                                src="/box.svg"
                                alt="Box"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                            <p>{item.item_name}</p>
                            <p>Amount : {amount}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}