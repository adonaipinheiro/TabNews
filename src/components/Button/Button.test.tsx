import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {Button} from './';

jest.mock('@react-navigation/elements', () => ({
  getDefaultHeaderHeight: jest.fn(),
}));

describe('<Button />', () => {
  it('should renders button with text="Entrar"', () => {
    const {getByText} = render(<Button text="Entrar" />);
    const buttonText = getByText('Entrar');
    expect(buttonText).toBeTruthy();
  });

  it('should renders loading state correctly', () => {
    const {getByText} = render(
      <Button text="Entrar" loading={true} />,
    );
    const loadingText = getByText('Carregando');
    expect(loadingText).toBeTruthy();
  });

  it('should calls onPress callback when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button text="Entrar" onPress={onPressMock} />,
    );
    const button = getByText('Entrar');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should verify if button is disabled when loading is true', () => {
    const {getByText, root} = render(
      <Button text="Entrar" loading={true} />,
    );
    const button = getByText('Carregando');
    expect(button).toBeTruthy();
    expect(root.props.accessibilityState.disabled).toEqual(true);
  });

  it('should take a snapshot', () => {
    const {toJSON} = render(<Button text="Click me" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
