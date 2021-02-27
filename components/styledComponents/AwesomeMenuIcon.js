import React from 'react';
import { BottomNavigation } from '@ui-kitten/components';
import { withStyles, Icon } from '@ui-kitten/components';
import { Appearance } from 'react-native';

const AwesomeMenuIcon = (props) => {
  const { eva, style, ...restProps } = props;
  return (
    <Icon {...restProps} style={[eva.style.custom, style]} name='menu-2-outline' />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeMenuIcon = withStyles(AwesomeMenuIcon, (theme) => ({
  custom: {
    backgroundColor: theme['color-primary-default'],
   //  width: '100%'
  },
}));