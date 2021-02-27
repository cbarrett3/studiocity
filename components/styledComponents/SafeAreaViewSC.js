import React from 'react';
// import { SafeAreaView, View } from 'react-native';
import { withStyles, SafeAreaView } from '@ui-kitten/components';
import { ThemeContext } from '../../theme-context'

// const themeContext = React.useContext(ThemeContext);

const SafeAreaViewSC = (props) => {
  const { eva, style, ...restProps } = props;
  return (
   //  console.log(themeContext.theme)
    <SafeAreaView {...restProps} style={[eva.style.styles, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const SafeAreaViewStyled = withStyles(SafeAreaViewSC, (theme) => ({
  styles: {
   //  backgroundColor: themeContext.theme === 'light' ? 'white' : 'black',
  },
}));