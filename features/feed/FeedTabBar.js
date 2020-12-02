/* UI Kitten Component for Feed Top Tab Bar */
import React from 'react';
import { TabBar, Tab, Divider, TabElement, Text } from '@ui-kitten/components';
import { ThemedAwesomeTabBar } from '../../components/styledComponents/AwesomeTabBar';

export const FeedTabBar = (props) => {

  const onTabSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return (
      <Tab
         key={route.key}
         title={options.title}
      // icon={options.tabBarIcon}
      />
    );
  };

  return (
   <>
      <ThemedAwesomeTabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
         {props.state.routes.map(createNavigationTabForRoute)}
      </ThemedAwesomeTabBar>
      {/* <Divider/> */}
   </>
  );
};