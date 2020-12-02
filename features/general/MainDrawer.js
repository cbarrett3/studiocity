import React from 'react';
import { Drawer, DrawerItem, DrawerElement } from '@ui-kitten/components';
import { ThemedAwesomeDrawer } from '../../components/styledComponents/AwesomeDrawer';
export const MainDrawer = (props) => {

  const onDrawerItemSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createDrawerItemForRoute = (route, index) => {
    const { options } = props.descriptors[route.key];
    return (
      <DrawerItem
        key={index}
      //   title='test'
        title={route.name}
      //   accessoryLeft={options.drawerIcon}
      />
    );
  };

  return (
   //  <SafeAreaLayout insets={SaveAreaInset.TOP}>
      <ThemedAwesomeDrawer
        data={props.state.routes.map(createDrawerItemForRoute)}
        onSelect={onDrawerItemSelect}
      />
   //  {/* </SafeAreaLayout> */}
  );
};