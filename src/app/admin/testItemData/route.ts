import { NextRequest, NextResponse } from "next/server";

const testItemData = [
        { id: 1, item_name: "Box A", current_price: 10, size: "S", stock_quantity: 10, status: "Active"},
        { id: 2, item_name: "Box B", current_price: 20, size: "M", stock_quantity: 20, status: "Discontinued"},
        { id: 3, item_name: "Box C", current_price: 30, size: "L", stock_quantity: 30, status: "Active"},
    ];

var lastId = 3;

export async function GET() {
    return NextResponse.json(testItemData);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const newItem = { id: lastId + 1, ...body };
    testItemData.push(newItem);
    lastId = lastId + 1;
    return NextResponse.json(newItem)
}

export async function PUT(req: NextRequest) {
    const updatedItem = await req.json(); // Expect full Item with id
    const index = testItemData.findIndex(i => i.id === updatedItem.id);

    if (index === -1) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    testItemData[index] = updatedItem;

    return NextResponse.json(testItemData[index]);
}