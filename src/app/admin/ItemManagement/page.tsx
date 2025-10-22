'use client';

import { useEffect, useState } from "react";

import { Item } from "@/app/admin/types"
import { getItems, postItem, searchItem, updateItem } from "@/libs/API/ItemsAPI";

import ItemList from "../components/ItemList";
import TopBar from "../components/TopBar";
import AddItemPopup from "../components/AddItemPopup";
import ItemDetailPopup from "../components/ItemDetailPopup";

export default function ItemManagementForm() {
    const [list, setList] = useState<Item[]>([]);
    const [isAddItemPopupOpen, setIsAddItemPopupOpen] = useState(false);
    const [isItemDetailPopupOpen, setIsItemDetailPopupOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<Item>({
        id: 0,                 
        item_name: "",        
        current_price: 0,      
        size: "",               
        stock_quantity: 0,
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
        setIsAddItemPopupOpen(true);
    }

    const closeNewItemPopup = () => {
        setIsAddItemPopupOpen(false);
    }

    const openItemDetailPopup = (id : number) => {
        const item = list.find(i => i.id === id);
        setSelectedItem(item!);
        setIsItemDetailPopupOpen(true);
    }

    const closeItemDetailPopup = () => {
        setIsItemDetailPopupOpen(false);
    }

    const createItem = async (item : Omit<Item, "id">) => {
        postItem(item);
        closeNewItemPopup();
        const newList = await getItems();
        displayList(newList);
    }

    const updateItemDetail = async (item : Item) => {
        updateItem(item);
        const newList = await getItems();
        displayList(newList);
        closeItemDetailPopup();
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
            <ItemList list={list} onClickItem={openItemDetailPopup}/>
            <AddItemPopup 
                open={isAddItemPopupOpen} 
                onCloseNewItemPopup={closeNewItemPopup} 
                onClickAddItem={createItem}
            />
            <ItemDetailPopup 
                open={isItemDetailPopupOpen}    
                onCloseItemDetailPopup={closeItemDetailPopup} 
                onClickUpdateItem={updateItemDetail} 
                item={selectedItem}
                />
        </div>
    );
}