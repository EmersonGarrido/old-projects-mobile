import styled, {css} from 'styled-components/native';
import FontAwesomeIcon from '@expo/vector-icons/build/FontAwesome';

import theme from '../../constants';

interface IconContainerProps {
  noMargin?: boolean;
}

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}


export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #ccc;

  flex-direction: row;
  align-items: center;

  ${({isErrored}) => isErrored &&
    css`
      border-color: ${theme.colors.danger};
    `
  }
  ${({isFocused}) => isFocused &&
    css`
      border-color: ${theme.colors.primary};
    `
  }
`;

export const Field = styled.TextInput`
  flex: 1;
  height: 100%;
  color: ${theme.colors.primary};

`;

export const IconContainer = styled.View<IconContainerProps>`
  justify-content: center;
  align-items: center;
  margin-right: ${({ noMargin }): any => (noMargin ? '0' : '10px')};
  width: 45px;
  height:100%;
  padding: 0 5px;
`;

export const Icon = styled(FontAwesomeIcon)``;

export const Label = styled.Text`
  color: ${theme.colors.primary};
  margin-bottom: 10px;
  align-self: flex-start;
`;
