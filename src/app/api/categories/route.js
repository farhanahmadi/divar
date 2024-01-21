import { NextResponse, NextRequest } from "next/server";
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

export async function POST(NextRequest) {
  const body = await NextRequest.json();
  const { category } = body;
  try {
    await dbConnect();
    await Categories.create({
      label: category.label,
      englishName: category.englishName,
    });
    const categoriesList = await Categories.find();
    return NextResponse.json({ categoriesList }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
