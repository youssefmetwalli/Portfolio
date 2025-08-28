import { NextResponse } from "next/server";
import { PROJECTS } from "@/common/constants/projects";

export const GET = async () => {
  try {
    return NextResponse.json(PROJECTS, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
};
