// 14. Loading fallback for the meetings section.
// It gives users a simple loading message while data is being fetched.
export default function Loading() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
      Loading meetings...
    </div>
  );
}
