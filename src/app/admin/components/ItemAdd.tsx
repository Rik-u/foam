import Image from "next/image";
import { ItemAddButtonProps } from "../types";

export default function ItemAdd({onClickAdd}: ItemAddButtonProps) {
    return (
        <div className="flex outline-2 outline-dashed rounded-xl p-3 h-55" onClick={onClickAdd}>
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