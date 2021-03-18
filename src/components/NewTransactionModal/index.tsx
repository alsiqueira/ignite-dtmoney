import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTrasactionModalProps) {
  const [type, setType] = useState('deposit');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src={closeImg}
          alt="Fechar Modal"
          onClick={onRequestClose}
          className="react-modal-close"
        />
      </button>
      <Container>
        <h2>Cadastrar transações</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadatrar</button>
      </Container>
    </Modal>
  );
}
