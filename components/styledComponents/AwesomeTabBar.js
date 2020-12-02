import React from 'react';
import { TabBar } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

const AwesomeTabBar = (props) => {
  const { eva, style, ...restProps } = props;

  return (
    <TabBar {...restProps} style={[eva.style.theme, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeTabBar = withStyles(AwesomeTabBar, (theme) => ({
  theme: {
    paddingTop: '13%'
    // backgroundColor: theme['color-primary-default']
  },
}));