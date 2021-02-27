/* Navigator Helper Component: 
   ---- Provides Home Bottom Tabs Functionality
   ---> Passed into BottomTab.Navigator as a tabBar prop in HomeBottomTabNavigator.js
*/
import React from 'react';
import { BottomNavigationTab, Divider } from '@ui-kitten/components';
import { BottomNavigationStyledForHome } from '../../components/styledComponents/BottomNavigationStyledForHomeSC';

export const HomeBottomTab = (props) => {
   const onSelect = (index) => {
      const selectedTabRoute = props.state.routeNames[index];
      props.navigation.navigate(selectedTabRoute);
   };
   const createNavigationTabForRoute = (route) => {
      const { options } = props.descriptors[route.key];
      return (
         <BottomNavigationTab
            key={route.key}
            title={options.title}
            icon={options.tabBarIcon}
         />
      );
   };
   return (
      <>
         <BottomNavigationStyledForHome
            selectedIndex={props.state.index}
            onSelect={onSelect}>
            {props.state.routes.map(createNavigationTabForRoute)}
         </BottomNavigationStyledForHome>
      </>
   );
};