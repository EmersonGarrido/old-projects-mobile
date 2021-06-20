import React, { useState, useRef, useCallback } from 'react';
import { TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { getValidationErrors } from '../../utils';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';
import FormContainer from '../../components/FormContainer';

import * as S from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [hidePassword, setHidePassword] = useState(true);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é origatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('A Senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { email, password } = data;

      await signIn({ email, password });

    } catch (err) {
      const errors = getValidationErrors(err);


      formRef.current?.setErrors(errors);
    }
  }, [signIn]);

  return (
    <>
      <FormContainer>
        <S.Container>
          <S.Logo />
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              name="email"
              icon="envelope"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              viewPass={hidePassword ? 'eye-slash' : 'eye'}
              handleViewPass={() => setHidePassword(!hidePassword)}
              secureTextEntry={hidePassword}
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>
          </Form>
        </S.Container>
      </FormContainer>
    </>
  );
};

export default SignIn;
