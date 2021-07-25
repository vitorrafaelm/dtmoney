import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// Transaction input vai herdar todos os elementos menos id e createdAt
type TrasactionInput = Omit<Transaction, "id" | "createdAt">;

// Pick escolhe os elementos que eu quero de uma interface
// type TrasactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (ransaction: TrasactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TrasactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
