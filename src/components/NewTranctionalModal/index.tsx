import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { useTransactions } from "../../hooks/useTransactions";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTrancationalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionalModal({
  isOpen,
  onRequestClose,
}: NewTrancationalModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      amount,
      category,
      type,
      title,
    });
    setTitle(''); 
    setAmount(0); 
    setCategory('');
    setType('deposit')
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      // Classes para estilizar o modal e a parte cinza do modal
      // Overlay é a classe cinza;
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <input
          onChange={(event) => setAmount(Number(event.target.value))}
          value={amount}
          type="text"
          placeholder="valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            // Usando styled componentes podemos estilizar butões a partir de
            // propriedades que ele tem
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          onChange={(event) => setCategory(event.target.value)}
          value={category}
          type="text"
          placeholder="Categoria"
        />

        <button onClick={(e) => handleCreateNewTransaction(e)} type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
