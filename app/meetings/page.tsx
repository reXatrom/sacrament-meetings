// 15. Meetings listing page.
// It renders the meetings list view that users can browse from the app.
import MeetingsList from "../../components/MeetingsList";

export default function MeetingsPage() {
  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">All meetings</h2>
        <p className="mt-2 text-slate-600">
          Browse the current and past sacrament meetings from this week onward.
        </p>
      </div>

      <MeetingsList />
    </section>
  );
}
