import React, { useState, useMemo, useCallback } from 'react';
import { Expense } from './types';
import { SAMPLE_EXPENSES, CATEGORIES } from './constants';
import BudgetSummary from './components/BudgetSummary';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Charts from './components/Charts';
import SavingTips from './components/SavingTips';
import BudgetTemplates from './components/BudgetTemplates';
import { HeaderIcon } from './components/icons';

const App: React.FC = () => {
    const [monthlyBudget, setMonthlyBudget] = useState<number>(2000);
    const [expenses, setExpenses] = useState<Expense[]>(SAMPLE_EXPENSES);

    const totalSpent = useMemo(() => {
        return expenses.reduce((acc, expense) => acc + expense.amount, 0);
    }, [expenses]);

    const remainingBudget = useMemo(() => {
        return monthlyBudget - totalSpent;
    }, [monthlyBudget, totalSpent]);

    const addExpense = useCallback((expense: Omit<Expense, 'id' | 'date'>) => {
        const newExpense: Expense = {
            ...expense,
            id: Date.now(),
            date: new Date().toISOString(),
        };
        setExpenses(prevExpenses => [newExpense, ...prevExpenses]);
    }, []);

    const deleteExpense = useCallback((id: number) => {
        setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
    }, []);

    return (
        <div className="min-h-screen text-gray-300 p-4 sm:p-6 lg:p-8 font-sans">
            <header className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 drop-shadow-lg flex items-center justify-center gap-4">
                    <HeaderIcon />
                    <span>Panel de Presupuesto</span>
                </h1>
                <p className="text-gray-400 mt-2">Gestiona tus finanzas con claridad y estilo.</p>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <BudgetSummary total={monthlyBudget} spent={totalSpent} remaining={remainingBudget} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AddExpenseForm categories={CATEGORIES} onAddExpense={addExpense} />
                        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} categories={CATEGORIES} />
                    </div>
                    <Charts expenses={expenses} />
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <SavingTips />
                    <BudgetTemplates />
                </div>
            </main>
        </div>
    );
};

export default App;