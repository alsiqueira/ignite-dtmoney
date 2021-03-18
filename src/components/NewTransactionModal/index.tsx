import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTrasactionModalProps) {
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
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadatrar</button>
      </Container>
    </Modal>
  );
}
