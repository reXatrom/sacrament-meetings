// 12. Detail page client wrapper.
// It loads a single meeting from the API and renders the detailed program view for that meeting.
"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import type { SacramentMeeting } from "@/lib/types";
import { MeetingDetail } from "@/components/MeetingDetail";

interface MeetingDetailPageClientProps {
  meetingId: number;
}

export function MeetingDetailPageClient({ meetingId }: MeetingDetailPageClientProps) {
  const [meeting, setMeeting] = useState<SacramentMeeting | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeeting() {
      const response = await fetch(`/api/meetings/${meetingId}`, { cache: "no-store" });
      if (response.status === 404) {
        notFound();
      }

      if (response.ok) {
        const data = (await response.json()) as SacramentMeeting;
        setMeeting(data);
      }

      setLoading(false);
    }

    void loadMeeting();
  }, [meetingId]);

  if (loading) {
    return <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">Loading meeting details...</div>;
  }

  if (!meeting) {
    return null;
  }

  return <MeetingDetail meeting={meeting} />;
}
