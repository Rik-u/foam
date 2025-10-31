'use client';

import OrderList from "../components/OrderList";
import Order from "@/types/Order";
import { useEffect, useState } from "react";
import { getOrdersById } from "@/libs/API/OrderAPI";
import TopBar from "../components/StoreTopBar";
import OrderHistoryTopBar from "../components/OrderHistoryTopBar";

export default function OrdersHistoryPage() {
    const [list, setList] = useState<Order[]>([])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getOrdersById(Number(localStorage.getItem("userId")));
                displayList(data);
            } catch (err) {
                console.error("Failed to fetch data");
            }
        }

        getData();
    }, []);

    const displayList = (orders: Order[]) => {
        setList(orders)
    }
    
    const openUserMenu = () => {

    }

    return (
        <div>
            <OrderHistoryTopBar
                onClickPfp={openUserMenu}
            />
            <OrderList
                list={list}
            />
        </div>
    );
}