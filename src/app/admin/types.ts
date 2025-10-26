import type { ItemType } from "@/types/Item";

export interface ItemProps {
    id: number;
    title: string;
    onClickDelete: (id: number) => void;
}

export interface ItemGridProps {
    items: ItemType[]
}

export interface ItemAddButtonProps {
    onClickAdd: () => void;
}

//TODO Add reserve quantity
export interface Item {
    id: number,
    item_name: string,
    current_price: number,
    size: string,
    stock_quantity: number
    status: string
};