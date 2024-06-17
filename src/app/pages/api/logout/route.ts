import { NextResponse } from "next/server";
import { ConnectionToDB } from "@/connectionDB/connectiondb";
ConnectionToDB();
export async function GET(request: any) {
  try {
    const response = NextResponse.json({
      message: "user logged out",
      success: true,
    });
    response.cookies.delete("token");
    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: "user not logged out",
      success: false,
    });
  }
}
