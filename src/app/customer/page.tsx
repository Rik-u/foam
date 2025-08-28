import ItemGrid from "./components/ItemGrid";
import SearchBar from "./components/SearchBar";

export default function CustomerPage() {
    return (
        <div className="p-5">
            <div className="flex flex-col items-center my-5">
                <div className="w-1/2">
                    <SearchBar />
                </div>
            </div>
            <div>
                <ItemGrid />
            </div>
        </div>
    );
}