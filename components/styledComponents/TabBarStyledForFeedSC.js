import React from 'react';
import { TabBar } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

const TabBarStyledForFeedSC = (props) => {
  const { eva, style, ...restProps } = props;
  return (
      <TabBar {...restProps} style={[eva.style.theme, style]} />
  );
};

// with styles allows us to create styles like styleSheet but with our current theme
export const TabBarStyledForFeed = withStyles(TabBarStyledForFeedSC, (theme) => ({
  theme: {
    paddingTop: 0,
   //  backgroundColor: theme['color-primary-default'],
  },
}));