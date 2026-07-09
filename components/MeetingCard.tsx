// 9. Meeting summary card component.
// It shows key information for each meeting and links to the full detail page.
import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {meeting.meetingType}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            {new Date(meeting.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
          {meeting.date}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">Presiding:</span> {meeting.presiding}
        </p>
        <p>
          <span className="font-semibold text-slate-900">Conducting:</span> {meeting.conducting}
        </p>
        <p>
          <span className="font-semibold text-slate-900">Opening hymn:</span> {meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>
      </div>
    </Link>
  );
}
