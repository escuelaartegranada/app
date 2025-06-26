
export interface Expense {
    id: number;
    name: string;
    amount: number;
    category: string;
    date: string;
}

export interface Category {
    id: string;
    name: string;
    color: string;
    icon: (props: { className?: string }) => React.ReactNode;
}
   