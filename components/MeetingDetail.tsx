// 10. Full meeting detail component.
// It renders the entire sacrament meeting program, including hymns, prayers, business items, and speakers.
"use client";

import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {meeting.meetingType}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            {new Date(meeting.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h1>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="no-print rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
        >
          Print program
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Leaders</h2>
          <p><span className="font-medium text-slate-700">Presiding:</span> {meeting.presiding}</p>
          <p><span className="font-medium text-slate-700">Conducting:</span> {meeting.conducting}</p>
          <p><span className="font-medium text-slate-700">Stake business:</span> {meeting.stakeBusiness ? "Yes" : "No"}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Announcements</h2>
          {meeting.announcements?.length ? (
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {meeting.announcements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-600">No announcements listed.</p>
          )}
        </section>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Program details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-medium text-slate-900">Opening hymn</p>
            <p className="text-slate-700">{meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-medium text-slate-900">Opening prayer</p>
            <p className="text-slate-700">{meeting.openingPrayer}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-medium text-slate-900">Sacrament hymn</p>
            <p className="text-slate-700">{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-medium text-slate-900">Closing hymn</p>
            <p className="text-slate-700">{meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Ward business</h2>
        {meeting.wardBusiness.length ? (
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {meeting.wardBusiness.map((item) => (
              <li key={item.description}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-600">No ward business listed.</p>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Speakers and musical numbers</h2>
        <ul className="space-y-2">
          {meeting.speakers.map((speaker) => (
            <li key={`${speaker.name}-${speaker.topic}`} className="rounded-2xl bg-slate-50 p-4 text-slate-700">
              <p className="font-medium text-slate-900">{speaker.name}</p>
              <p>{speaker.type === "musical-number" ? "Musical number" : "Speaker"}{speaker.topic ? ` • ${speaker.topic}` : ""}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Closing prayer</h2>
        <p className="text-slate-700">{meeting.closingPrayer}</p>
      </section>
    </article>
  );
}
