import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyles } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { NewTransactionalModal } from "./components/NewTranctionalModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  // Handle significa que o usuário vai clicar em algo ou fazer algo acontecer;
  // Lida com ações do usuários;
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionalModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}
