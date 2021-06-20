import React from "react";
import { Image, View } from "react-native";

import * as S from "./styles";

const LogoHeader: React.FC = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo />
      </S.LogoContainer>
      <S.Line />
    </S.Container>
  );
};

export default LogoHeader;
