import type { Metadata } from "next";
import { SignOutButton } from "@/components/sign-out-button";

export const metadata: Metadata = {
  title: "Create Meeting",
  description: "Create a new sacrament meeting schedule.",
};

export default function NewMeetingPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">
        Create Meeting — Coming in Week 04
      </h1>

      <SignOutButton />
    </section>
  );
}