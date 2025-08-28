import Image from "next/image";

export default function Item() {
    return (
        <div className="outline rounded-xl p-3">
            <Image 
                src="/box.svg"
                alt="Box"
                width={100}
                height={100}
                className="mx-auto"
            />
            <p>FoamA</p>
            <p>฿ 50</p>
            <button className="bg-blue-500 rounded-full px-3">Add to cart</button>
        </div>
    );
}