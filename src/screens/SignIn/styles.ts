import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import theme from '../../constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: ${theme.colors.white};
  margin-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : '0'};
`;

export const Logo = styled.Image.attrs({
  source: require('../../assets/logo.png'),
  resizeMode: 'contain'
})`
  width: 200px;
`
