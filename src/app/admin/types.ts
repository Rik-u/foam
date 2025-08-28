export interface ItemType {
    id : number;
    title : string;
}

export interface ItemProps {
    id: number;
    title: string;
    onClickDelete: (id: number) => void;
}

export interface ItemGridProps {
    items: ItemType[];
    onClickAdd: () => void;
    onClickDelete: (id: number) => void;
}

export interface ItemAddButtonProps {
    onClickAdd: () => void;
}