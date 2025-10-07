'use client';

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className={`flex flex-col ${collapsed ? 'w-1/6 bg-blue-400' : 'w-16'} h-screen `}>
            <div className="flex justify-end my-4 mr-4">
                <Menu onClick={() => setCollapsed(prev => !prev)} className="hover:border-2"/>
            </div>
            
            <aside className={`flex flex-col w-full items-center ${collapsed ? 'flex' : 'hidden'}`}>
                <nav className="p-2 hover:bg-blue-500 w-full text-center">
                    <Link href='/admin/item-management'>Items Management</Link>
                </nav>
            </aside>
        </div>
    );
}