// 18. Meetings API collection route.
// It returns all meetings or filters them by date when the query string is provided.
import { NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const date = searchParams.get("date");

  const meetings = await getMeetings(date ?? "");

  return NextResponse.json(meetings);
}
