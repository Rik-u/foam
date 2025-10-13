'use client';

import { useEffect, useState } from "react";

import { Item } from "@/app/admin/types"
import { getItems, postItem, searchItem } from "@/libs/API/ItemsAPI";

import ItemList from "../components/ItemList";
import TopBar from "../components/TopBar";
import AddItemPopup from "../components/AddItemPopup";

export default function ItemManagementForm() {
    const [list, setList] = useState<Item[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

    const displayList = (items : Item[]) => {
        setList(items)
    }

    const checkNULL = (query : string) => {
        if (query == null || query == '') {
            return true;
        }
        return false;
    }

    const openNewItemPopup = () => {
        setIsPopupOpen(true);
    }

    const closeNewItemPopup = () => {
        setIsPopupOpen(false);
    }

    const createItem = async (item : Omit<Item, "id">) => {
        postItem(item);
        closeNewItemPopup();
        const newList = await getItems();
        displayList(newList);
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
            <TopBar onSearch={search} onOpenNewItemPopup={openNewItemPopup}/>
            <ItemList list={list}/>
            <AddItemPopup open={isPopupOpen} onCloseNewItemPopup={closeNewItemPopup} onClickAddItem={createItem}/>
        </div>
    );
}