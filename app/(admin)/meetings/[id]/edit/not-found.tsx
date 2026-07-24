import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl space-y-6 py-10 text-center">
      <h1 className="text-3xl font-bold">
        Meeting not found
      </h1>

      <p className="text-gray-600">
        The meeting you are looking for does not exist or may have been deleted.
      </p>

      <Link
        href="/meetings"
        className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Back to Meetings
      </Link>
    </main>
  );
}