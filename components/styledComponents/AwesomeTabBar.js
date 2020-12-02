import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabBar } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import {ThemedAwesomeTopNavigation } from './AwesomeTopNavigation'

const AwesomeTabBar = (props) => {
  const { eva, style, ...restProps } = props;
  return (
      <TabBar {...restProps} style={[eva.style.theme, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeTabBar = withStyles(AwesomeTabBar, (theme) => ({
  theme: {
   //  paddingTop: '4%'
    // backgroundColor: theme['color-primary-default']
  },
}));