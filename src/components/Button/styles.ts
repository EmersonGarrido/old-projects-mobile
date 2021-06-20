import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import theme from "../../constants";

export const Container = styled(RectButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  padding: 15px 0;
  border-radius: 10px;
`;

export const Text = styled.Text`
  color: ${theme.colors.white};
`;
