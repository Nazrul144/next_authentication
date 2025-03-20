import { connectionDB } from "@/lib/connectionDB"
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    const db = await connectionDB();
    try {
        
        const newUser = await request.json()
        const userCollection = await db.collection('users')
        //Email validation:
        const exist = userCollection.findOne({email: newUser.email})
        if(exist){
            return NextResponse.json({message: "Email already exist"}, {status: 500})
        }
        const res = await userCollection.insertOne(newUser)
        return NextResponse.json({message: "user created successfully",res}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 303})
    }
}