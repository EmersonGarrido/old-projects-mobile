import styled from "styled-components/native";
import FontAwesomeIcon from "@expo/vector-icons/build/FontAwesome";

import theme from "../../constants";

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  background-color: #fff;
`;

export const ContainerHeader = styled.View`
  padding: 10px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
`;

export const ContainerFooter = styled.View`
  padding: 10px;
  width: 100%;
`;

export const ContainerFooterBoxInfo = styled.View`
  width: 100%;
`;

export const BoxInfo = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-top: 10px;
  margin-right: 15px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
`;

export const TextBoxInfo = styled.Text`
  font-size: 14px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${theme.colors.primary};
`;

export const CardSlideContainerHeader = styled.View`
  padding: 10px;
  border: 2px solid #f1f1f1;
  width: 100%;
`;

export const CardSlideTitle = styled.Text`
  font-size: 26px;
  color: white;
  font-weight: bold;
`;

export const CardSlideSubTitle = styled.Text`
  font-size: 18px;
  color: white;
`;

export const CardSlideContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  border-radius: 10px;
  margin: 10px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  elevation: 5;
`;

interface BackgroundProps {
  image: string;
}

export const CardSlideBackgroundImage = styled.ImageBackground.attrs({
  // source: require("../../assets/bannerrequest.png"),
  risezeMode: "cover",
})`
  height: 100%;
  padding: 20px;
`;
