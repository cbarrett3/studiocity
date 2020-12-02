import React from 'react';
import { BottomNavigation } from '@ui-kitten/components';
import { withStyles, Button } from '@ui-kitten/components';
import { Appearance } from 'react-native';

const AwesomeHeaderButton = (props) => {
  const { eva, style, ...restProps } = props;

  return (
    <Button {...restProps} style={[eva.style.custom, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeHeaderButton = withStyles(AwesomeHeaderButton, (theme) => ({
  custom: {
    // paddingBottom: '8%',
    backgroundColor: 'blue',
    // backgroundColor: theme['color-primary-default']
  },
}));