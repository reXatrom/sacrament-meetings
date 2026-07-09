// 7. Shared footer component.
// It renders simple informational text at the bottom of the app shell.
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Prepared for leaders and clerks.</p>
        <p>Current and past meeting programs are easy to review.</p>
      </div>
    </footer>
  );
}
