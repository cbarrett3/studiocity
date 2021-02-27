import React from 'react';
import { View } from 'react-native';
import { withStyles } from '@ui-kitten/components';

const AwesomeView = (props) => {
  const { eva, style, ...restProps } = props;
  return (
   //  console.log(themeContext.theme)
    <View {...restProps} style={[eva.style.theme, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeView = withStyles(AwesomeView, (theme) => ({
  theme: {
    backgroundColor: theme['color-primary-500'],
    borderRadius: '40'
  },
}));
