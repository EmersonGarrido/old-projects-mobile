import React from "react";
import { Feather } from "@expo/vector-icons";

import LogoHeader from "../../components/LogoHeader";

import * as S from "./styles";

const Profile: React.FC = () => {
  return (
    <S.Container>
      <LogoHeader />
      <S.HeaderTitle>
        <S.HeaderContainer></S.HeaderContainer>
      </S.HeaderTitle>
    </S.Container>
  );
};

export default Profile;
