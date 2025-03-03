import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddExpense } from "@/context/AddExpenseContext";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const ItemForm = () => {
  const { expenseItem, expenseAmount, setExpenseItem, setExpenseAmount, handleExpense } = useAddExpense();
  return (
    <form onSubmit={handleExpense} className="w-full space-y-2">
      <h2 className="flex w-full justify-end border-b pb-3 pt-1 text-sm font-semibold"> New Expense</h2>
      <Input required value={expenseItem} onChange={(e) => setExpenseItem(e.target.value)} type="text" className="w-full" placeholder="Name" />{" "}
      <Input
        required
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        type="number"
        className="w-full"
        placeholder="Amount"
      />
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className="w-full" type="submit">
        Add Expense
      </Button>
    </form>
  );
};

export default ItemForm;
import * as React from "react";
