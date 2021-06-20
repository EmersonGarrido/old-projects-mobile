import styled from "styled-components/native";
import theme from "../../constants";

export const Container = styled.View`
  flex: 1;
  background-color: #fefefe;
`;

export const ContainerLogoHeader = styled.View`
  width: 100%;
  height: 70px;
`;

export const ContainerHeaderInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  height: 50px;
`;

export const HeaderName = styled.Text`
  font-size: 18px;
  text-align: center;
`;

export const HeaderSubTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;
