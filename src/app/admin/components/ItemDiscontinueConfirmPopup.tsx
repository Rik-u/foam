'use client';

export default function ItemDiscontinueConfirmPopup( { 
        onNo, 
        onOpenLastItemDetailPopup,
        onConfirm 
    } : { 
        onNo : () => void; 
        onOpenLastItemDetailPopup : () => void; 
        onConfirm : () => void;
    } ) {

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
            <div className="flex flex-col gap-2 bg-white p-6 rounded shadow-lg">
                <h1>Are you sure you want to remove this item?</h1>
                <div className="flex gap-2">
                    <button type="button" 
                            className="flex-1 bg-green-400 p-2 px-4 rounded-xl shadow-2xl hover:shadow hover:bg-green-500" 
                            onClick={onConfirm}
                    >
                        Yes
                    </button>
                    <button type="button"
                            className="flex-1 bg-red-500 p-2 px-4 rounded-xl shadow-2xl hover:shadow hover:bg-red-600" 
                            onClick={() => { onNo(); onOpenLastItemDetailPopup(); }}
                    >
                        No
                    </button>
                </div>            
            </div>
        </div>
    );
}