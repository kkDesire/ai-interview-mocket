import { Button } from "@/components/ui/button";
import Link from "next/link";

function PriceCard({ plan }) {
  return (
    <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">{plan.name}</h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {plan.cost}$
          </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        {plan.offering
          ? plan.offering.map((item, index) => (
              <li key={item.value}>{item.value}</li>
            ))
          : null}
      </ul>

      {plan.paymmentLink ? (
        <Button
          variant="outline"
          size="lg"
          className="mt-8 hover:border-2 hover:text-primary focus:shadow-sm transition-all border-primary text-primary rounded-full w-full py-3 font-bold"
        >
          <Link href={plan.paymmentLink}>Get Started</Link>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="lg"
          className="mt-8 hover:border-2 hover:text-primary focus:shadow-sm transition-all border-primary text-primary rounded-full w-full py-3 font-bold"
        >
          <Link href="/dashboard">Get Started</Link>
        </Button>
      )}
    </div>
  );
}

export default PriceCard;
