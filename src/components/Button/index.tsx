import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, Title} from './styles';

interface Props extends RectButtonProperties {
  title: string;
}

const Button: React.FC<Props> = ({title, ...rest}: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
