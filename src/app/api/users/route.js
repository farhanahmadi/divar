import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/server/utils/dbConnect";
import Users from "@/server/models/user";
import { OtpCreator, OtpExpiresIn } from "@/utils/OtpHandler";

export async function GET() {
  try {
    await dbConnect();
    const usersList = await getAllUsers();
    return NextResponse.json({ usersList });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(NextRequest) {
  await dbConnect();
  const usersList = await getAllUsers();
  const user = await NextRequest.json();
  //check use if exist only update fields
  if (usersList.find((item) => item.phoneNumber === user.phoneNumber)) {
  } else {
    try {
      // create new user
      await Users.create({
        phoneNumber: user.phoneNumber,
        otp: {
          code: OtpCreator(),
          expiresIn: OtpExpiresIn(),
        },
      });
      const usersList = await getAllUsers();
      return NextResponse.json(
        { message: "کد تایید با موفقیت ارسال شد", usersList },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
}

// get all users list
export async function getAllUsers() {
  const usersList = await Users.find({});
  return usersList;
}
