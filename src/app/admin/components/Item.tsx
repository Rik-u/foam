import Image from "next/image";
import { ItemProps } from "../types";

export default function Item({id, title, onClickDelete}: ItemProps) {
    return (
        <div className="outline-2 rounded-xl p-3 h-55">
            <Image 
                src="/box.svg"
                alt="Box"
                width={100}
                height={100}
                className="mx-auto"
            />
            <p>ID : {id}</p>
            <p>{title}</p>
            <p>฿ 50</p>
            <Image
                src="/trash.svg"
                alt="Box"
                width={25}
                height={25}
                className="mx-auto"
                onClick={() => onClickDelete(id)}
            />
        </div>
    );
}