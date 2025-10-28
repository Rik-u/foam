import Item from "@/types/Item";
import ItemPopup from "./ItemPopup";
import CartPopup from "./CartPopup";
import CartItem from "@/types/Cart";

export default function Popup( { 
    activePopup,
    item,
    cart,
    onClose,
    onAddItemToCart
} : {
    activePopup : "ITEM" | "CART" |null;
    item : Item;
    cart : CartItem[];
    onClose : () => void;
    onAddItemToCart : (item : Item, amount : number) => void;
} ) {

    switch (activePopup) {
        case "ITEM":
            return (
                <ItemPopup
                    item={item}
                    onCloseItemPopup={onClose}
                    sendData={onAddItemToCart}
                />
            );

        case "CART":
            return (
                <CartPopup
                    cart={cart}
                    onCloseCartPopup={onClose}
                />
            );

        default :
            return null;
    }
}