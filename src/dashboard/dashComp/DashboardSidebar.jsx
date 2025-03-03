import { Button } from "@/components/ui/button";
import { BadgeDollarSign, ChevronDown, ChevronUp, LayoutDashboard, Snail } from "lucide-react";
import { useState } from "react";

const DashboardSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex h-full select-none flex-col justify-between">
      <div>
        <div className="mb-3 flex items-center gap-2 border-b pb-3 font-semibold">
          <Snail width={18} />
          <h2>Uniqweber</h2>
        </div>
        <div className=" ">
          <div className="flex cursor-pointer items-center gap-2 pb-3 text-indigo-500">
            <LayoutDashboard size={13} />
            <h2 className="text-sm font-medium"> Overview </h2>
          </div>
          <div className="relative">
            <h2 onClick={() => setShow(!show)} className="text-primary relative flex cursor-pointer items-center gap-2 pb-2.5 text-sm font-medium">
              <BadgeDollarSign size={14} />
              Recent Expenses
            </h2>
            {show && (
              <div className="pl-4 text-xs font-light text-gray-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button key={i} className="hover:bg-primary w-full border-b p-1 pb-1 text-left last:border-b-0 hover:text-white">
                    {new Date().toDateString()}
                  </button>
                ))}
              </div>
            )}
            {show ? (
              <ChevronUp size={14} className="absolute right-1 top-1 text-gray-400" />
            ) : (
              <ChevronDown size={14} className="absolute right-1 top-1 text-gray-400" />
            )}
          </div>
        </div>
      </div>
      <Button variant="outline" className="w-full">
        Add New List
      </Button>
    </div>
  );
};

export default DashboardSidebar;
