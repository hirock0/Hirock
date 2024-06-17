import { ConnectionToDB } from "@/connectionDB/connectiondb";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
ConnectionToDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { emailOrnumber, password } = reqBody;
    const emailornumber = { emailOrnumber: emailOrnumber };
    const findData = await SignUpSchema.findOne(emailornumber);
    if (findData == null) {
      return NextResponse.json({
        message: "Email not correct",
        success: false,
      });
    } else {
      const verifyPassword = await bcrypt.compare(password, findData.password);
      if (findData !== null && verifyPassword) {
        const tokenData = {
          id: findData._id,
          name: findData.name,
          nanoid: findData?.nanoId || "",
        };
        const token = Jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
          expiresIn: "1d",
        });
        const response = NextResponse.json({
          message: "login successful",
          success: true,
        });
        response.cookies.set("token", token, { httpOnly: true });
        return response;
      }
    }

    return NextResponse.json({ message: "user logged in", success: true });
  } catch (error: any) {
    return NextResponse.json({ message: "user not logged in", success: false });
  }
}
