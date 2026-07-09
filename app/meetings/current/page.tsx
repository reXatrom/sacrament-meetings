// 16. Current Sunday redirect page.
// It calculates the most recent Sunday and sends the user to that meeting's detail page when available.
import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  const sundayKey = sunday.toISOString().slice(0, 10);
  const meetings = getMeetings(sundayKey);

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  }

  redirect("/meetings");
}
