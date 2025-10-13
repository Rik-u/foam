import { NextRequest, NextResponse } from "next/server";

const testItemData = [
        { id: 1, item_name: "Box A", current_price: 10, size: "S", stock_quantity: 10 },
        { id: 2, item_name: "Box B", current_price: 20, size: "M", stock_quantity: 20 },
        { id: 3, item_name: "Box C", current_price: 30, size: "L", stock_quantity: 30 },
    ];

export async function GET() {
    return NextResponse.json(testItemData);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const newItem = { id: testItemData[testItemData.length - 1].id + 1, ...body };
    testItemData.push(newItem);
    return NextResponse.json(newItem)
}