import Item from "./Item";
import { ItemGridProps } from "../types";

export default function ItemGrid({items}: ItemGridProps) {
    return (
        <div className="grid grid-cols-5 gap-3">
            {items.map((item) => (
                <Item key={item.id} id={item.id} title={item.title} />
            ))}
        </div>
    );
}