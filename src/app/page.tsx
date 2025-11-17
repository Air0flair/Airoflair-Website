import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-24 px-12 bg-white dark:bg-black sm:items-start">

        {/* Airoflair Logo */}
        <div className="mb-8">
          <Image
            src={Logo}
            alt="Airoflair Logo"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to the Airoflair Website 🚀
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is the new home of Airoflair — proudly built with Next.js, Tailwind,
            GitHub Actions, and Azure Static Web Apps. Your deployment pipeline is
            now fully connected and ready for development.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-12">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

      </main>
    </div>
  );
}
