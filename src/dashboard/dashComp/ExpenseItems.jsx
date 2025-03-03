import React from "react";
import ItemForm from "./ItemForm";
import { useAddExpense } from "@/context/AddExpenseContext";

const ExpenseItems = () => {
  const { allExpense } = useAddExpense();
  const currentDate = new Date().toDateString();

  return (
    <div className="flex h-[calc(100vh-24px)] items-start justify-between">
      <div className="w-full pr-3">
        <h2 className="flex items-center justify-between border-b pb-3 pt-1 text-sm font-semibold">
          <span>Today Expenses</span>
          <span>{currentDate}</span>
        </h2>
        <div>
          {allExpense?.map((item, i) => (
            <div key={i} className="flex items-center justify-between border-b p-2">
              {item.item} - {item.amount}
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-full max-w-64 flex-shrink-0 border-l pl-3">
        <ItemForm />
      </div>
    </div>
  );
};

export default ExpenseItems;
