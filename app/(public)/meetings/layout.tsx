// 13. Meetings section layout.
// It provides shared navigation and spacing for all meetings-related pages.
import { NavLinks } from "@/components/NavLinks";

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Meetings
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">Plan and review agendas</h1>
        </div>
        <NavLinks />
      </div>
      {children}
    </div>
  );
}
