import { NextResponse } from "next/server";
import { getAchievements } from "@/services/achievements";

export async function GET() {
  try {
    const data = await getAchievements();
    return NextResponse.json(data, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e?.message || "Internal Server Error" }, { status: 500 });
  }
}
