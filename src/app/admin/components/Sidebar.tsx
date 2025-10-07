'use client';

import { Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(true);

    const goTo = (path : string) => {
        router.push(`/admin/${path}`);
    };

    return (
        <div className={`flex flex-col ${collapsed ? 'w-16' : 'w-1/6 bg-blue-400'} h-screen `}>
            <div className="flex justify-end my-4 mr-4">
                <Menu onClick={() => setCollapsed(prev => !prev)} className="hover:border-2"/>
            </div>
            
            <div className={`w-full items-center ${collapsed ? 'hidden' : 'flex'}`}>
                <div className="flex flex-col w-full text-center">
                    <button onClick={() => goTo('ItemManagement')} className="hover:bg-blue-500 p-1">Items Management</button>
                    <button onClick={() => goTo('Test')} className="hover:bg-blue-500 p-1">Test</button>
                </div>
            </div>
        </div>
    );
}