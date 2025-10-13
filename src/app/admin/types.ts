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