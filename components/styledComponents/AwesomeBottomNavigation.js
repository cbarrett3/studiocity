import React from 'react';
import { BottomNavigation } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

const AwesomeBottomNavigation = (props) => {
  const { eva, style, ...restProps } = props;

  return (
    <BottomNavigation {...restProps} style={[eva.style.theme, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeBottomNavigation = withStyles(AwesomeBottomNavigation, (theme) => ({
  theme: {
    paddingBottom: '8%',
    indicatorHeight: 1
    // backgroundColor: theme['color-primary-default']
  },
}));