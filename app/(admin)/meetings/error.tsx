'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-xl space-y-6 py-10 text-center">
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="text-gray-600">
        {error.message || 'An unexpected error occurred while processing your request.'}
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}