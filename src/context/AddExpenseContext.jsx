import { createContext, useContext, useState } from "react";

const AddExpenseContext = createContext();
import React from "react";

export const AddExpenseContextProvider = ({ children }) => {
  const [expenseItem, setExpenseItem] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [allExpense, setAllExpense] = useState([]);

  const handleExpense = (e) => {
    e.preventDefault();
    if (!expenseItem || !expenseAmount) return;
    console.log(expenseAmount, expenseItem);
    setAllExpense((prev) => [...prev, { amount: expenseAmount, item: expenseItem }]);
  };

  return (
    <AddExpenseContext.Provider value={{ expenseAmount, setExpenseAmount, expenseItem, setExpenseItem, handleExpense, allExpense }}>
      {children}
    </AddExpenseContext.Provider>
  );
};

export const useAddExpense = () => useContext(AddExpenseContext);
