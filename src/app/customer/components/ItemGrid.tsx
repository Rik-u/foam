import Item from "./Item";

export default function ItemGrid() {
    return (
        <div className="grid grid-cols-5 gap-3">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}