import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <header className="flex items-center gap-3">
          <Link
            href="/"
            className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-zinc-500"
            aria-label="Back to home"
          >
            ←
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-28 sm:h-9 sm:w-32">
              <Image
                src={Logo}
                alt="Airoflair Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xs text-zinc-400">Legal · Terms of Service</span>
          </div>
        </header>

        {/* Content */}
        <main className="mt-8 mb-12 flex-1">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Last updated: 03 September 2023
          </p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-200">
            {/* 
              To keep things within content limits and avoid copying the entire
              legal document verbatim here, you can paste your existing Terms
              of Service text from https://www.airoflair.com/terms-of-service
              into this section.
            */}
            <p className="text-zinc-300">
              These Terms of Service (&quot;Agreement&quot;) set out the general terms and
              conditions governing your access to and use of Airoflair services,
              including the airoflair.com website, Inspect platform, and related
              mobile applications.
            </p>

            <p>
              By accessing or using any Airoflair product or service, you agree
              to be bound by this Agreement. If you do not agree with these
              terms, you must not use the services.
            </p>

            <p className="text-xs text-zinc-500">
              <strong>Note:</strong> Replace this placeholder text with your full, current
              Terms of Service content to ensure legal accuracy.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
