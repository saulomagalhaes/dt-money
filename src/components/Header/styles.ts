import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue)
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem; //Cima, lados, baixo
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem; //Cima/Baixo, Direita/Esquerda
    border-radius: 0.25px;
    height: 3rem;

    transition: filter 0.2s; // Toda vez q a propriedade filter for alterada faz transicao

    &:hover { //Estou tratando do próprio button
      filter: brightness(0.9);
    }
    
  }
`;