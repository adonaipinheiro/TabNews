import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';

import {images} from '@assets';
import {Button, Divider, Input} from '@components';

import styles from './styles';

export function SignUp() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image style={styles.img} source={images.logo} />
      <Text style={styles.title}>TabNews</Text>
      <Divider size={16} />
      <Text style={styles.subTitle}>Cadastro</Text>
      <Divider size={16} />
      <Input label="Nome do usuário" />
      <Divider size={16} />
      <Input label="E-mail" />
      <Divider size={16} />
      <Input label="Senha" />
      <Divider size={16} />
      <Input label="Confirme a senha" />
      <Divider size={16} />
      <Button text="Recuperar" />
    </KeyboardAvoidingView>
  );
}
