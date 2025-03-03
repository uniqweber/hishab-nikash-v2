import { AddExpenseContextProvider } from "@/context/AddExpenseContext";
import DashboardSidebar from "./dashComp/DashboardSidebar";
import ExpenseItems from "./dashComp/ExpenseItems";

const Dashboard = () => {
  return (
    <>
      <AddExpenseContextProvider>
        <div className="flex items-start">
          <aside className="sticky top-0 h-screen w-60 flex-shrink-0 overflow-auto border-r px-3 py-3">
            <DashboardSidebar />
          </aside>
          <div className="w-full px-3 py-3">
            <ExpenseItems />
          </div>
        </div>
      </AddExpenseContextProvider>
    </>
  );
};

export default Dashboard;
