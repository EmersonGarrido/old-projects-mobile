import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import ContainerPage from "../../components/ContainerPage";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import { api } from "../../services";

import { normalizeMoney, normalizeNumberFormat } from "../../utils";

import * as S from "./styles";

interface DataProps {
  id: number;
  username: string;
  marca: string;
  modelo: string;
  versao: string;
  ano: string;
  cor: string;
  cambio: string;
  combustivel: string;
  carroceria: string;
  km: number;
  mediadepreco: number;
  cidade: string;
}

type RouteParams = {
  id: {
    car_id: number;
  };
};

const RequestDetails: React.FC = () => {
  const [carList, setCarList] = useState<DataProps>({} as DataProps);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute<RouteProp<RouteParams, "id">>();

  async function getCarInfoDatailes() {
    const response = await api.get(`/carlist/${route.params.car_id}`);
    setCarList(response.data);
  }

  useEffect(() => {
    setLoading(true);

    getCarInfoDatailes().then(() => setLoading(false));
  }, []);

  return (
    <ContainerPage>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <S.Container>
            <S.ContainerLogo>
              <S.Logo />
            </S.ContainerLogo>
            <S.TitleContainer>
              <S.Title>
                {carList.marca} {carList.modelo}
              </S.Title>
              <S.Status>Pendente</S.Status>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Média de Preço :</S.SubTitle>
              <S.SubTitle>{normalizeMoney(carList.mediadepreco)}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Versão :</S.SubTitle>
              <S.SubTitle>{carList.versao}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Ano :</S.SubTitle>
              <S.SubTitle>{carList.ano}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Quilômetragem :</S.SubTitle>
              <S.SubTitle>{normalizeNumberFormat(carList.km)} KM</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Cor :</S.SubTitle>
              <S.SubTitle>{carList.cor}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Câmbio :</S.SubTitle>
              <S.SubTitle>{carList.cambio}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Cambutível :</S.SubTitle>
              <S.SubTitle>{carList.combustivel}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Carroceria :</S.SubTitle>
              <S.SubTitle>{carList.carroceria}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Cidade :</S.SubTitle>
              <S.SubTitle>{carList.cidade}</S.SubTitle>
            </S.TitleContainer>
            <S.TitleContainer>
              <Button>Solicitar Agora</Button>
            </S.TitleContainer>
          </S.Container>
        </ScrollView>
      )}
    </ContainerPage>
  );
};

export default RequestDetails;
