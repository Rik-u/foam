import Sidebar from "./components/Sidebar";

export default function AdminLayout({ children } : { children : React.ReactNode; }) {
    return (
        <div>
            <Sidebar /> 
            <main>
                {children}
            </main>
        </div>
    );
}