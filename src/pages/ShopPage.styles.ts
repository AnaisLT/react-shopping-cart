import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const AppBarWrapper = styled.div`
  .toolbar {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  margin: 40px;
`;

export const AppBarActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const StyledButton = styled(IconButton)`
  justify-self: flex-end;

  svg {
    fill: white;
  }
`;
