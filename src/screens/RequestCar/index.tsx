import React, { useRef, useCallback } from "react";
import { AsyncStorage } from "react-native";

import { ScrollView } from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import { api } from "../../services";
import { useAuth } from "../../hooks/auth";

import LogoHeader from "../../components/LogoHeader";
import ContainerPage from "../../components/ContainerPage";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormContainer from "../../components/FormContainer";

import selectOptions from "../../assets/json/selectOptions.json";

import * as S from "./styles";

const RequestCar: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();

  const handleRequestCar = useCallback(async (data) => {
    const token = await AsyncStorage.getItem("@RABrasilCRM:token");

    const requestCar = {
      marca: data.marca,
      modelo: data.modelo,
      versao: data.versao,
      ano: parseInt(data.ano),
      cor: data.cor,
      cambio: data.cambio,
      combustivel: data.combustivel,
      carroceria: data.carroceria,
      km: parseInt(data.km),
      mediadepreco: parseInt(data.mediadepreco),
      cidade: data.cidade,
    };

    const car = JSON.stringify(requestCar);

    // const headers = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // };

    // console.log(headers);
    const response = await api.post("/carlist", car);

    return response;
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer>
        <LogoHeader />
      </S.HeaderContainer>
      <ScrollView>
        <S.ContainerForm>
          <FormContainer>
            <Form ref={formRef} onSubmit={handleRequestCar}>
              <Input icon="car" label="Marca" name="marca" />
              <Input icon="car" label="Modelo" name="modelo" />
              <Input icon="cog" label="Versão" name="versao" />
              <Select
                name="cambio"
                label="Câmbio"
                items={selectOptions.exchange}
              />
              <Select
                name="combustivel"
                label="Combustível"
                items={selectOptions.fuel}
              />
              <Select
                name="cidade"
                label="Cidade"
                items={selectOptions.state}
              />
              <Input icon="calendar" label="Ano" name="ano" />
              <Select name="cor" label="Cor" items={selectOptions.colorsCar} />
              <Input icon="dashboard" label="KM" name="km" />
              <Select
                name="carroceria"
                label="Carroceria"
                items={selectOptions.bodywork}
              />
              <Input
                icon="money"
                label="Valor Solicitado Carro "
                name="mediadepreco"
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Solicitar Carro
              </Button>
            </Form>
          </FormContainer>
        </S.ContainerForm>
      </ScrollView>
    </S.Container>
  );
};

export default RequestCar;
