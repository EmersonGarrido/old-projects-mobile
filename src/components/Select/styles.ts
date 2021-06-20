import styled from "styled-components/native";

import theme from "../../constants";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #ccc;
  overflow: hidden;
`;

export const Label = styled.Text`
  color: ${theme.colors.primary};
  margin-bottom: 10px;
  align-self: flex-start;
`;
