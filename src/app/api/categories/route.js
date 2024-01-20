import { NextResponse } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import Categories from "@/server/models/category";
//connect to db

export async function GET() {
  try {
    await dbConnect();
    const categoriesList = await Categories.find();
    return NextResponse.json({ categoriesList });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
