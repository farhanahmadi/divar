import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import SubCategorys from "@/server/models/subCategory";

export async function GET(NextRequest, { params }) {
  await dbConnect();
  const { slug } = params;
  try {
    const subCategoriesList = await SubCategorys.find();
    const filteredSubCategoriesList = subCategoriesList.filter(
      (subCategory) => subCategory.parentId == slug
    );
    return NextResponse.json({ filteredSubCategoriesList });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(NextRequest) {
  await dbConnect();
  const category = await NextRequest.json();
  try {
    await SubCategorys.create({
      label: category.label,
      englishName: category.englishName,
      parentId: category.parentId,
    });
    const subCategoriesList = await SubCategorys.find();
    return NextResponse.json({ subCategoriesList }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
