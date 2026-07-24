import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';

export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">
        Edit Meeting
      </h1>

      <p>Meeting ID: {meeting.id}</p>

      {/* Your edit form will go here */}
    </section>
  );
}