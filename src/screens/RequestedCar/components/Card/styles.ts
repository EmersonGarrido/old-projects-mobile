import styled from "styled-components/native";
import FontAwesomeIcon from "@expo/vector-icons/build/FontAwesome";

import theme from "../../../../constants";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin: 10px;
  background-color: #fdfdfd;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  elevation: 10;
`;

export const ContainerInternal = styled.View`
  padding: 10px 15px 10px 15px;
  width: 100%;
  margin: 0;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 12px;
  margin: 5px 0;
  font-weight: bold;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${theme.colors.primary};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const InfoText = styled.Text`
  margin-left: 10px;
  font-weight: bold;
`;

export const Description = styled(Title)`
  color: #646569;
  font-size: 10px;
`;
export const Price = styled(Title)`
  font-size: 16px;
  color: ${theme.colors.primary};
`;

export const Inline = styled(TitleContainer)`
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.View`
  border: 1px solid #e0e0e0;
`;
