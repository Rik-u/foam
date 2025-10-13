import { Item } from "@/app/admin/types";

export async function getItems() {
        const res = await fetch("http://localhost:3000/admin/testItemData");
        const data = await res.json();
        return data;
}

export async function postItem(item : Omit<Item, "id">) {
        const res = await fetch("http://localhost:3000/admin/testItemData", {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(item),
        });
    }

export async function searchItem(query : string) {
        const res = await fetch(`http://localhost:3000/admin/ItemManagement?search=${query}`);
        const data = await res.json();
        return data;
    }

export async function deleteItemById() {
    
}