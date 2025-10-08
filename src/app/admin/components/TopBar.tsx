import SearchBar from "./SearchBar";

export default function TopBar({ onSearch } : { onSearch: (query : string) => void }) {
    return (
        <div className="flex items-center justify-center h-14 bg-blue-400">
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}