import { Icons } from "@/components/app/Icons";
import Link from "next/link";
export const metadata = {
  title: "404 Not Found | AI Interview Mocket",
  description: "Not Found",
};
function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        {/* <h1 className="text-9xl font-black text-gray-200">404</h1> */}
        <Icons.custom404 />
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ooop!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
