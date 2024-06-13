import planData from "@/utils/planData";
import PriceCard from "../_components/PriceCard";
function Upgrade() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="flex flex-col justify-center items-center mb-5">
        <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
          Upgrade
        </h2>
        <h2 className="text-sm font-bold text-gray-500">
          Upgrade to monthly plan to access unlimited mock interviews
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        {planData
          ? planData.map((plan, index) => (
              <PriceCard plan={plan} key={plan.id} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Upgrade;
