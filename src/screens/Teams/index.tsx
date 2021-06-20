import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";

import ContainerPage from "../../components/ContainerPage";
import CardTeams from "../../components/CardTeams";

import LogoHeader from "../../components/LogoHeader";
import Loading from "../../components/Loading";

import * as S from "./styles";

import { api } from "../../services";

interface UsersProps {
  id: number;
  first_name: string;
  last_name: string;
  admin: boolean;
  cpf: string;
  email: string;
  facebook: string;
  telegram: string;
  instagram: string;
  saldo: string;
  telefone: string;
  whatsapp: string;
}

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function getTeams() {
    if (loading) {
      return;
    }

    setLoading(true);

    const response = await api.get("/users");
    setTeams(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getTeams();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ alignSelf: "center", marginVertical: 20, width: "100%" }}>
        <ActivityIndicator color="#1976D2" size="small" />
      </View>
    );
  };

  return (
    <ContainerPage>
      <S.Container>
        <S.ContainerHeader>
          <LogoHeader />
        </S.ContainerHeader>
        <FlatList
          data={teams}
          keyExtractor={(team) => String(team.id)}
          renderItem={({ item }) => <CardTeams data={item} />}
          // renderItem={({ item }) => <S.Title>{item.first_name}</S.Title>}
          showsVerticalScrollIndicator={false}
          onEndReached={getTeams}
          onEndReachedThreshold={0.5}
          // contentContainerStyle={{
          //   paddingHorizontal: 20,
          // }}
          ListHeaderComponent={renderFooter}
        />
      </S.Container>
    </ContainerPage>
  );
};

export default Teams;
