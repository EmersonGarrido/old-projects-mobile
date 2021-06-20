import styled from "styled-components/native";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #003f82;
  margin-top: ${Platform.OS === "ios" ? `${getStatusBarHeight()}px` : "0"};
`;
