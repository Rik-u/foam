'use client';

import { useState, useEffect } from "react";

import Item from "@/types/Item"
import CartItem from "@/types/Cart";
import { getItems, searchItem } from "@/libs/API/ItemsAPI";

import ItemGrid from "./components/ItemGrid";
import Popup from "./components/Popup";
import CartPopup from "./components/CartPopup";
import CartButton from "./components/CartButton";
import SearchBar from "./components/SearchBar";

export default function CustomerPage() {
    const [list, setList] = useState<Item[]>([]);
    const [activePopup, setActivePopup] = useState<"ITEM" | "CART" | null>(null);
    const [selectedItem, setSelectedItem] = useState<Item>({
        id: 0,
        item_name: "",
        current_price: 0,
        size: "",
        stock_quantity: 0,
        status: ""
    });
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getItems();
                displayList(data);
            } catch (err) {
                console.error("Failed to fetch data");
            }
        }

        getData();
    }, []);

    const displayList = (items: Item[]) => {
        setList(items)
    }

    const getItem = (id: number) => {
        const item = list.find(i => i.id === id);
        setSelectedItem(item!);
    }

    const handleOpenItemPopup = (id: number) => {
        getItem(id)
        setActivePopup("ITEM");
    }

    const addItemToCart = (item: Item, amount: number) => {
        if (amount <= 0)
            return;
        
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(c => c.item.id === item.id);
            const updatedCart = [...prevCart];

            if (existingItemIndex >= 0) {
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    amount: updatedCart[existingItemIndex].amount + amount
                };
            } else {
                updatedCart.push({ item, amount });
            }

            return updatedCart;
        });

        setActivePopup(null);
    }

    const checkNULL = (query: string) => {
        if (query == null || query == '') {
            return true;
        }
        return false;
    }

    const search = async (query : string) => {
        if (checkNULL(query)) {
            return;
        }
        const result = await searchItem(query);
        displayList(result);
    }

    return (
        <div>
            <SearchBar
                onSearch={search}
            />
            <CartButton
                onOpenCart={() => setActivePopup("CART")}
            />
            <ItemGrid
                items={list}
                onClickItem={handleOpenItemPopup}
            />
            <Popup
                activePopup={activePopup}
                item={selectedItem}
                cart={cart}
                onClose={() => setActivePopup(null)}
                onAddItemToCart={addItemToCart}
            />
        </div>
    );
}