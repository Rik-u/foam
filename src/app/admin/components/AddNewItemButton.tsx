export default function AddNewItemButton({ onClickAddNewItem } : { onClickAddNewItem: () => void}) {
    return (
        <div>
            <button className="bg-green-400 p-2 px-4 rounded-xl shadow-2xl hover:shadow hover:bg-green-500" onClick={onClickAddNewItem}>Add New Item</button>
        </div>
    );
}