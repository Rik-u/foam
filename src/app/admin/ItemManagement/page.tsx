'use client';

import { useEffect, useState } from "react";

import Item from "@/types/Item"
import { getItems, postItem, searchItem, updateItem } from "@/libs/API/ItemsAPI";

import ItemList from "../components/ItemList";
import ItemManagementTopBar from "../components/ItemManagementTopBar";
import ItemManagementPopup from "../components/ItemManagementPopup";

export default function ItemManagementForm() {
    const [list, setList] = useState<Item[]>([]);
    const [activePopup, setActivePopup] = useState<"DETAIL" | "CONFIRM" | "ADD" | null>(null);
    const [selectedItem, setSelectedItem] = useState<Item>({
        id: 0,
        item_name: "",
        current_price: 0,
        size: "",
        stock_quantity: 0,
        reserve_quantity: 0,
        status: ""
    });

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

    const checkNULL = (query: string) => {
        if (query == null || query == '') {
            return true;
        }
        return false;
    }

    const getItem = (id: number) => {
        const item = list.find(i => i.id === id);
        setSelectedItem(item!);
    }

    const handleClosePopup = () => {
        setActivePopup(null);
    }

    const handleOpenItemDetailPopup = (id: number) => {
        getItem(id);
        setActivePopup("DETAIL");
    }

    const handleOpenAddItemPopup = () => {
        setActivePopup("ADD");
    }

    const createItem = async (item: Omit<Item, "id">) => {
        await postItem(item);
        const newList = await getItems();
        displayList(newList);
        handleClosePopup();
    }

    const updateItemDetail = async (item: Item) => {
        await updateItem(item);
        const newList = await getItems();
        displayList(newList);
        handleClosePopup();
    }

    const search = async (query: string) => {
        if (checkNULL(query)) {
            return;
        }
        const result = await searchItem(query);
        displayList(result);
    }

    return (
        <div>
            <ItemManagementTopBar onSearch={search} onOpenNewItemPopup={handleOpenAddItemPopup} />
            <ItemList list={list} onClickItem={handleOpenItemDetailPopup} />
            <ItemManagementPopup
                activePopup={activePopup}
                item={selectedItem}
                onClose={handleClosePopup}
                onAddItem={createItem}
                onUpdateItem={updateItemDetail}
                onOpenConfirmPopup={() => setActivePopup("CONFIRM")}
                onOpenLastItemDetailPopup={() => setActivePopup("DETAIL")}
            />
        </div>
    );
}