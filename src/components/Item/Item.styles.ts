import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 20px;
  width: 100%;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 500px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
