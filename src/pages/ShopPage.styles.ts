import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import '@fontsource/amatic-sc';

export const AppBarWrapper = styled.div`
  .appbar {
    background-color: #533440;
  }

  .toolbar {
    display: flex;
  }

  .title {
    color: #e4d4c8;
    width: 100%;
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
    font-size: 2.5rem;
  }
`;

export const Wrapper = styled.div`
  margin: 40px;

  .drawerHeader {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const AppBarActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const StyledButton = styled(IconButton)`
  justify-self: flex-end;

  svg {
    fill: #e4d4c8;
    height: 30px;
    width: 30px;
  }
`;
