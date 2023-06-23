import {render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Divider} from './';

describe('<Divider />', () => {
  it('should renders correctly with size and horizontal props', () => {
    const divider = renderer.create(
      <Divider size={2} horizontal={false} />,
    );

    expect(divider.root.props).toEqual({size: 2, horizontal: false});
  });

  it('should renders correctly with size and vertical props', () => {
    const divider = renderer.create(
      <Divider size={2} horizontal={true} />,
    );

    expect(divider.root.props).toEqual({size: 2, horizontal: true});
  });

  it('should Divider component renders correctly', () => {
    const {toJSON} = render(<Divider size={2} horizontal={false} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
