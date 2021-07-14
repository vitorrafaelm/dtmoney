import { useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTrancationalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionalModal({
  isOpen,
  onRequestClose,
}: NewTrancationalModalProps) {
  const [type, setType] = useState('deposit');

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

        <input type="text" placeholder="title" />
        <input type="number" placeholder="valor" />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            // Usando styled componentes podemos estilizar butões a partir de 
            // propriedades que ele tem
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="number" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
