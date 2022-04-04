import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); //3 Itens ocupando 1 Fracao de tamanho
  gap: 2rem; // Espaçamento entre os itens do grid
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top:1rem;
      display: block; // Por padrão vem inline e nao aceita o margin
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &.highlight-background{
      background: var(--green);
      color: #FFF ;
    }
  }
`