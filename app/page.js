import Link from "next/link";

export const metadata = {
  title: "Home | AI Interview Mocket",
  description: "AI Interview Mocket",
};

export default function Home() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Interview Simulator with Gemini API.
          </h1>

          <p className="mx-auto mt-4 max-2w-xl sm:text-xl/relaxed">
            Welcome to our interview simulation platform powered by the Gemini
            API! Our intuitive interface allows you to add your skills and
            experience simulated interviews tailored to your specific
            qualifications.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
