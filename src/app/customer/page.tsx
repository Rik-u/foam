import SearchBar from "./components/SearchBar";

export default function CustomerPage() {
    return (
        <div>
            <div className="relative">
                <div className="absolute w-1/2 inset-x-1/2 -translate-x-1/2 my-5">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}