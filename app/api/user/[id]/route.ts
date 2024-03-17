import dbconnect from "@/app/lib/dbconnect";
import User from "@/app/lib/usermodel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, {params}:any ) => {
    const {id} = params;
    await dbconnect();
    const singleUser = await User.findById(id);
    return NextResponse.json({ message: "get request", singleUser})
    
}
export const PUT = async (req:NextRequest, {params}:any ) => {
    const {id} = params;
    const body = await req.json();
    const {name,email,age} = await body;
    await dbconnect();
    const updatedUser = await User.findByIdAndUpdate(id, {name,email,age}, {new:true});
    const singleUser = await User.findById(id);
    return NextResponse.json({ message: "put request", singleUser})
    
}

export const DELETE = async (req:NextRequest, {params}:any ) => {
    const {id} = params;
    await dbconnect();
    const deleteUser = await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "delete request", deleteUser})
    
}