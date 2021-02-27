import React from 'react';
import { BottomNavigation } from '@ui-kitten/components';
import { withStyles, Drawer } from '@ui-kitten/components';

const AwesomeDrawer = (props) => {
  const { eva, style, ...restProps } = props;

  return (
    <Drawer {...restProps} style={[eva.style.custom, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeDrawer = withStyles(AwesomeDrawer, (theme) => ({
  custom: {
    // paddingTop: '15.2%'
    paddingTop: '20%',
    // headerPaddingVertical: 1000,
    // backgroundColor: 'blue'
   //  backgroundColor: theme['color-primary-default']
  },
}));