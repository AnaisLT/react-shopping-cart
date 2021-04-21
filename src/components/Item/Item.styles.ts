import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;

  .root {
    max-width: 345;
  }

  .book-details {
    height: 200px;
  }

  .button {
    justify-self: flex-end;
    margin-left: auto;
    font-weight: 500;
    color: #9db6cc;
    border: 2px solid #9db6cc;

    &:hover {
      background-color: #9db6cc;
      color: white;
    }
  }
`;
