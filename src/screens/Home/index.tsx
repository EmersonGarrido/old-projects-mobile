import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import Card from "../../components/Card";
import LogoHeader from "../../components/LogoHeader";

import { useAuth } from "../../hooks/auth";

import * as S from "./styles";

interface DataProps {
  username: string;
  marca: string;
  modelo: string;
  versao: string;
  cambio: string;
  combustivel: string;
  ano: string;
  cor: string;
  km: string;
  carroceria: string;
  mediadepreco: string;
  cidade: string;
  slideTitle?: string;
  slideDescription?: string;
}

const sliders = [
  {
    id: 1,
    username: "",
    marca: "",
    modelo: "",
    versao: "",
    cambio: "",
    combustivel: "",
    ano: "",
    cor: "",
    km: "",
    carroceria: "",
    mediadepreco: "",
    cidade: "",
    slideTitle: "Solicitar Carro",
    slideDescription: "Faça um pedido de compra.",
    slideImage: "../../assets/bannerrequest.png",
  },
  {
    id: 2,
    username: "",
    marca: "",
    modelo: "",
    versao: "",
    cambio: "",
    combustivel: "",
    ano: "",
    cor: "",
    km: "",
    carroceria: "",
    mediadepreco: "",
    cidade: "",
    slideTitle: "Meus Pedidos",
    slideDescription: "Ver Carros Solicitados",
    slideImage: "../../assets/bannermyrequest.png",
  },
];

const Home: React.FC = () => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <LogoHeader />
      <S.Container>
        <S.ContainerHeader>
          <S.SubTitle>
            Bem Vindo {user.first_name} {user.last_name}
          </S.SubTitle>
          <S.Title>O que vamos fazer hoje ?</S.Title>
        </S.ContainerHeader>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <S.CardSlideContainer
            onPress={() => navigation.navigate("RequestedCar")}
          >
            <S.CardSlideBackgroundImage
              source={require("../../assets/bannermyrequest.png")}
            >
              <S.CardSlideTitle>Meus Pedidos</S.CardSlideTitle>
              <S.CardSlideSubTitle>Ver Carros Solicitados</S.CardSlideSubTitle>
            </S.CardSlideBackgroundImage>
          </S.CardSlideContainer>
          <S.CardSlideContainer
            onPress={() => navigation.navigate("RequestCar")}
          >
            <S.CardSlideBackgroundImage
              source={require("../../assets/bannerrequest.png")}
            >
              <S.CardSlideTitle>Solicitar Carro</S.CardSlideTitle>
              <S.CardSlideSubTitle>
                Faça um pedido de compra.
              </S.CardSlideSubTitle>
            </S.CardSlideBackgroundImage>
          </S.CardSlideContainer>
          {/* {sliders.map((item) => (
            <Card key={String(item.id)} type="slider" data={item} />
          ))} */}
        </ScrollView>

        <S.ContainerFooter>
          <S.Title>Meu Perfil e Informação</S.Title>
          <S.SubTitle>
            Edite os detalhes do perfil ou entre em contato .
          </S.SubTitle>
          <S.ContainerFooterBoxInfo>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <S.BoxInfo onPress={() => navigation.navigate("EditProfile")}>
                <S.Icon name="edit" size={30} />
                <S.TextBoxInfo>Meu Perfil</S.TextBoxInfo>
              </S.BoxInfo>
              <S.BoxInfo onPress={() => navigation.navigate("Teams")}>
                <S.Icon name="users" size={30} />
                <S.TextBoxInfo>Equipe</S.TextBoxInfo>
              </S.BoxInfo>
              <S.BoxInfo>
                <S.Icon name="comments" size={30} />
                <S.TextBoxInfo>Suporte</S.TextBoxInfo>
              </S.BoxInfo>
              <S.BoxInfo onPress={signOut}>
                <S.Icon name="power-off" size={30} />
                <S.TextBoxInfo>Deslogar</S.TextBoxInfo>
              </S.BoxInfo>
            </ScrollView>
          </S.ContainerFooterBoxInfo>
        </S.ContainerFooter>
      </S.Container>
    </ScrollView>
  );
};

export default Home;
