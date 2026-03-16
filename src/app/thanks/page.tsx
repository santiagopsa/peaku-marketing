import Link from "next/link";
import type { Metadata } from "next";
import GoogleAdsConversion from "@/components/GoogleAdsConversion";

export const metadata: Metadata = {
  title: "Thanks | PeakU",
  description: "Thank you page after WhatsApp guide request.",
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-firo-bg px-5 py-24 text-firo-text md:px-8">
      <GoogleAdsConversion />
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-firo-line bg-white p-8 shadow-soft md:p-10">
        <p className="text-sm font-semibold text-firo-blue">Request sent</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Thank you! We will send your guide via WhatsApp.
        </h1>
        <p className="mt-4 text-firo-muted">
          Your information was received successfully. You can return to the home page if needed.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
