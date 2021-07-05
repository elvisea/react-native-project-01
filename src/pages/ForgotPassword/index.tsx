import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, InfoRecoveryText, Recovery, Fields} from './styles';

import Input from '../../components/Input';

import registerImg from '../../assets/register.png';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image style={{marginTop: 62.2}} source={registerImg} />
      <Recovery>Recuperar{'\n'}Senha</Recovery>

      <Fields>
        <InfoRecoveryText>
          Informe seu e-mail e enviaremos sua senha!
        </InfoRecoveryText>
        <Input placeholder="" />
      </Fields>

      <Button
        title="Enviar"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </Container>
  );
};

export default SignUp;
