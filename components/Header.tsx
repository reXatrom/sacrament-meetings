// 6. Shared header component.
// It displays the ward name and today’s date at the top of the application.
export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Sacrament Meeting Planner
          </p>
          <h2 className="text-xl font-semibold text-slate-900">Briarwood Ward</h2>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-medium">Today</p>
          <p>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</p>
        </div>
      </div>
    </header>
  );
}
