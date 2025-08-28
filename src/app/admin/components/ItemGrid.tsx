import Item from "./Item";
import ItemAdd from "./ItemAdd";
import { ItemGridProps } from "../types";

export default function ItemGrid({items, onClickAdd, onClickDelete}: ItemGridProps) {
    return (
        <div className="grid grid-cols-5 gap-3">
            {items.map((item) => (
                <Item key={item.id} id={item.id} title={item.title} onClickDelete={onClickDelete} />
            ))}
            <ItemAdd onClickAdd={onClickAdd}/>
        </div>
    );
}