import styled from "styled-components/native";

import theme from "../../constants";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${theme.colors.primary};
  margin-top: 50px;
`;
