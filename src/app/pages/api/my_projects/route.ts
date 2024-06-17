import { ProjectSchemaData } from "@/lib/SchemaDB/schemaModel";
import { ConnectionToDB } from "@/connectionDB/connectiondb";
ConnectionToDB();
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      projectName,
      projectImage,
      projectLink,
      projectTitle,
      recentDate,
      nanoId,
    } = reqBody;
    const PreSaveProject = await new ProjectSchemaData({
      projectName,
      projectImage,
      projectLink,
      projectTitle,
      recentDate,
      nanoId,
    });
    await PreSaveProject.save();
    return NextResponse.json({
      message: "Data is sent to database",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Data is not sent to database",
      success: false,
    });
  }
}

export async function GET() {
  try {
    const allProjects = await ProjectSchemaData.find();
    return NextResponse.json({
      message: "Data is found",
      success: true,
      allProjects,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not found", success: false });
  }
}
