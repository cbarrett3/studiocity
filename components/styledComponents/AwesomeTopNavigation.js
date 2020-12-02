import React from 'react';
import { TopNavigation, withStyles } from '@ui-kitten/components';

const AwesomeTopNavigation = (props) => {
  const { eva, style, ...restProps } = props;

  return (
    <TopNavigation {...restProps} style={[eva.style.custom, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const ThemedAwesomeTopNavigation = withStyles(AwesomeTopNavigation, (theme) => ({
  custom: {
    paddingTop: '20%'
  },
}));