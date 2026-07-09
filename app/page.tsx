// 4. Landing page for the planner.
// This page introduces the app and gives users quick access to the meetings list and the current Sunday meeting.
import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Coordinate announcements, hymns, prayers, and speakers",
  "Review current and past sacrament meeting programs",
  "Keep meeting details organized for bishops and clerks",
];

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 lg:py-16">
      <div className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Ward leadership tools
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Keep every sacrament meeting beautifully organized.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Track the opening hymn, prayers, ward business, musical numbers, and
            speakers in one clear planner designed for Sunday preparation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/meetings"
              className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Browse meetings
            </Link>
            <Link
              href="/meetings/current"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
            >
              Open current Sunday
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <Image
            src="/sacrament-planner.svg"
            alt="Illustration of a sacrament meeting planner with notes and agenda items"
            width={700}
            height={500}
            priority
            className="w-full rounded-xl"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-7 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
