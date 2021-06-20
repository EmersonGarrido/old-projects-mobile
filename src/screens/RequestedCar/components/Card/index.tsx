import React from "react";
import { useNavigation } from '@react-navigation/native';
import { upperFirst } from 'lodash';

import { normalizeMoney, normalizeNumberFormat, changeIconName } from "../../../../utils";

import { useAuth } from '../../../../hooks/auth'

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

interface BoxProps {
  data: DataProps;
}

const Card: React.FC<BoxProps> = ({ data }) => {
  const navigation = useNavigation();

  const { user } = useAuth();

  return (
    <S.Container
      onPress={() => navigation.navigate('RequestDetails', {
        car_id: data.id
      })}
    >
      <S.ContainerInternal>
        <S.TitleContainer>
          <S.Title>{`${data.marca} ${data.modelo}`.toUpperCase()}</S.Title>
          <S.Price>{normalizeMoney(data.mediadepreco)}</S.Price>
        </S.TitleContainer>
        <S.Description>{data.versao}</S.Description>
      </S.ContainerInternal>
      <S.ContainerInternal>
        <S.Inline>
          <S.Title>{data.ano}</S.Title>
          <S.Title>{normalizeNumberFormat(data.km)} KM</S.Title>
          <S.Title>{data.cor}</S.Title>
        </S.Inline>
      </S.ContainerInternal>
      <S.Line />
      <S.ContainerInternal>
        <S.Inline>
          {(user.id) === data.id && (
            <S.InfoContainer>
              <S.Icon name="user" size={20} />
              <S.InfoText>
                {data.first_name}
              </S.InfoText>
            </S.InfoContainer>
          )}
          <S.InfoContainer>
            <S.Icon name={changeIconName(data.status)} size={20} />
            <S.InfoText>
              {upperFirst(data.status)}
            </S.InfoText>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.Icon name="map-marker" size={20} />
            <S.InfoText>
              {data.cidade}
            </S.InfoText>
          </S.InfoContainer>
        </S.Inline>
      </S.ContainerInternal>
    </S.Container>
  );
};

export default Card;
