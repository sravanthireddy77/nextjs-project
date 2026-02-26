import connectionToDataBase from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionToDataBase();
    const { name, email, password, confirmPassword } = await request.json();
    const newUser = new User({ name, email, password, confirmPassword });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
