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
  }
`;
