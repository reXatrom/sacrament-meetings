// 17. Single meeting detail page.
// It loads one meeting by id and displays the full program content for that meeting.
import { notFound } from "next/navigation";
import { MeetingDetailPageClient } from "@/components/MeetingDetailPageClient";

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Meeting program</h2>
        <p className="mt-2 text-slate-600">
          Review the full agenda and print it for leaders or members.
        </p>
      </div>
      <MeetingDetailPageClient meetingId={meetingId} />
    </section>
  );
}
