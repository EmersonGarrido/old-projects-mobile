import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";

import ContainerPage from "../../components/ContainerPage";
import Card from "./components/Card";
import Loading from "../../components/Loading";
import LogoHeader from "../../components/LogoHeader";

import { api } from "../../services";

import * as S from "./styles";

interface DataProps {
  id: number;
  first_name: string;
  marca: string;
  modelo: string;
  versao: string;
  ano: string;
  cor: string;
  km: number;
  mediadepreco: number;
  cidade: string;
  admin: boolean;
  status: string;
}

const RequestedCar: React.FC = () => {
  const [carlist, setCarlist] = useState<DataProps[]>([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function getCarList() {
    if (loading) {
      return;
    }

    if (total > 0 && carlist.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get("/carlist", {
      params: { page },
    });

    setCarlist([...carlist, ...response.data]);

    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    getCarList();
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
        <S.ContainerLogoHeader>
          <LogoHeader />
        </S.ContainerLogoHeader>
        {/* <S.ContainerHeaderInfos>
          <S.HeaderName>Pedidos : </S.HeaderName>
          <S.HeaderSubTitle>Total de: {total}</S.HeaderSubTitle>
        </S.ContainerHeaderInfos> */}

        <FlatList
          data={carlist}
          keyExtractor={(car) => String(car.id)}
          renderItem={({ item }) => <Card data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={getCarList}
          onEndReachedThreshold={0.1}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          ListFooterComponent={renderFooter}
        />
      </S.Container>
    </ContainerPage>
  );
};

export default RequestedCar;
