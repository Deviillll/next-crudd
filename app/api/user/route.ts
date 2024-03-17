

import { NextRequest, NextResponse } from "next/server";
import dbconnect from "../../lib/dbconnect";
import User from "../../lib/usermodel";

//get request ----->

export const GET=async (req:NextRequest, res: NextResponse) => {
  await dbconnect();
  const users = await User.find();
  
  return NextResponse.json({ message: "get request", users})
}


//post request ----->
export const POST=async (req:NextRequest, res: NextResponse) => {
  try {
    const body=await req.json()
  const {name,email,age}=await body
  await dbconnect();
  const newUser =await User.create({name,email,age})

  return NextResponse.json({ 
    message: "post request", newUser
  
    },{ status: 201 })
    
  } catch (error) {
    console.error(error)
  }
  
 
}