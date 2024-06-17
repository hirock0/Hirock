import { NextRequest, NextResponse } from "next/server";
import { ConnectionToDB } from "@/connectionDB/connectiondb";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
ConnectionToDB();
export async function POST(request: NextRequest) {
  try {
    const ReqBody = await request.json();
    const {
      nanoId,
      name,
      emailOrnumber,
      password,
      reTypePassword,
      image,
      recentDate,
    } = ReqBody;
    if (password !== reTypePassword) {
      return NextResponse.json({
        message: "Password is not matched",
        success: false,
      });
    } else {
      const hashedpassword = await bcrypt.hash(password, 10);
      const presaveData = await new SignUpSchema({
        nanoId,
        name,
        emailOrnumber,
        password: hashedpassword,
        reTypePassword,
        image,
        recentDate,
      });

      const savedata = await presaveData.save();
      const tokenData = {
        id: savedata._id,
        name: savedata.name,
        nanoid: savedata.nanoId,
      };
      const token = Jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
        expiresIn: "1d",
      });
      const response = NextResponse.json({
        message: "signup successful",
        success: true,
      });
      response.cookies.set("token", token, { httpOnly: true });
      return response;
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "signup not successful",
      success: false,
    });
  }
}
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = Jwt.decode(token);
    const loggedUser = await SignUpSchema.findById({ _id: decodedToken.id });
    const AllData = await SignUpSchema.find();
    return NextResponse.json({
      message: "file is found",
      success: true,
      AllData,
      loggedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "file not found", success: false });
  }
}
