import type { ItemType } from "@/types/item";

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

export type Item = {
    id: number,
    item_name: string,
    current_price: number,
    size: string,
    stock_quantity: number
};