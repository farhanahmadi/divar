import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: "09334998033",
    },
    "secret"
  );
  console.log(token);
  console.log(jwt.decode(token));
  return NextResponse.json({ message: "success" }, { status: 200 });
}
