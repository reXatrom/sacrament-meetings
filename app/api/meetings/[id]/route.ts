// 19. Single meeting API route.
// It returns one meeting by id, with 400 and 404 handling for invalid or missing ids.
import { NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return NextResponse.json({ message: "Invalid meeting id" }, { status: 400 });
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    return NextResponse.json({ message: "Meeting not found" }, { status: 404 });
  }

  return NextResponse.json(meeting);
}
