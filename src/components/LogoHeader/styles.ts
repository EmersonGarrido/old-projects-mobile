import styled from "styled-components/native";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  /* flex: 1; */
  background-color: white;
  margin-top: ${Platform.OS === "ios" ? `${getStatusBarHeight()}px` : "0"};
`;

export const LogoContainer = styled.View`
  height: 70px;
  padding: 10px;
`;

export const Logo = styled.Image.attrs({
  source: require("../../assets/logo.png"),
  resizeMode: "contain",
})`
  width: 100%;
  height: 100%;
`;
export const Line = styled.View`
  border: 1px solid #e0e0e0;
`;
