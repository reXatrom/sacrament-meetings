// 11. Meetings list client component.
// It fetches meeting data from the API and displays each meeting as a card.
"use client";

import { useEffect, useState } from "react";
import type { SacramentMeeting } from "@/lib/types";
import { MeetingCard } from "@/components/MeetingCard";

export default function MeetingsList() {
  const [meetings, setMeetings] = useState<SacramentMeeting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetings() {
      const response = await fetch("/api/meetings", { cache: "no-store" });
      if (response.ok) {
        const data = (await response.json()) as SacramentMeeting[];
        setMeetings(data);
      }
      setLoading(false);
    }

    void loadMeetings();
  }, []);

  if (loading) {
    return <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">Loading meetings...</div>;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}
