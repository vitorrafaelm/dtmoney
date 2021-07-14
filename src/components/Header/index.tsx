import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface IProps{
  handleOpenNewTransactionModal: () => void; 
}

export function Header({ handleOpenNewTransactionModal }: IProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
