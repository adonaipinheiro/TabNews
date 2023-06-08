import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';

import {images} from '@assets';
import {Button, Divider, Input} from '@components';
import {StackNavigationProps} from '@routes';

import styles from './styles';

export function SignIn() {
  const {navigate} = useNavigation<StackNavigationProps>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image style={styles.img} source={images.logo} />
      <Text style={styles.title}>TabNews</Text>
      <Divider size={16} />
      <Input label="E-mail" />
      <Divider size={16} />
      <Input label="Senha" />
      <Divider size={16} />
      <Button text="Entrar" />
      <Divider size={54} />
      <Text style={styles.text} onPress={() => navigate('SignUp')}>
        Novo no TabNews?{' '}
        <Text style={styles.textLink}>Crie sua conta aqui.</Text>
      </Text>
      <Divider size={24} />
      <Text
        style={styles.text}
        onPress={() => navigate('RecoverPass')}>
        Esqueceu sua senha?{' '}
        <Text style={styles.textLink}>Clique aqui.</Text>
      </Text>
    </KeyboardAvoidingView>
  );
}
