import { connectionDB } from "@/lib/connectionDB"
import { NextResponse } from "next/server";

export const GET = async()=>{
    const db = await connectionDB();
    const servicesCollection = await db.collection('services')
    try {
        const res = await servicesCollection.find().toArray();
        return NextResponse.json({message: "Services Data Received", res}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Fail to fetch data"}, {status: 303})
    }
}