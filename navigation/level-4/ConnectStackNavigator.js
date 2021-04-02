/* todo: refactor header components to just use options props instead to improve performance*/
import React from 'react';
import { StyleSheet, BlurView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import Connect from '../../features/connect/Connect'; // should this be named ConnectScreen?
import Filter from '../../features/connect/MusicFilter'; // should this be named FilterScreen?
import Map from '../../features/connect/Map'; // should this be named MapScreen?
import { ConnectHeader } from '../../features/connect/ConnectHeader';
import { FilterHeader } from '../../features/connect/FilterHeader';
import { MapHeader } from '../../features/connect/MapHeader';
import { FilterTabBarNavigator } from '../level-5/FilterTabBarNavigator';

const ConnectStack = createStackNavigator();

const filterHeaderRight = () => {
   return <Text>Hola</Text>
}

export const ConnectStackNavigator = () => (
   <ConnectStack.Navigator initialRouteName='Connect' headerMode='screen' mode='modal'>
      <ConnectStack.Screen 
         name="Connect" 
         component={Connect} 
         options={{
            title:"Connect",
            header: (props) => (
               <ConnectHeader {...props} />
            ),
         }}
      />
      <ConnectStack.Screen 
         name="Filter" 
         component={FilterTabBarNavigator}
         // component={Filter} // much faster option currently
         options={{
            title:"Filter",
            header: (props) => (
               <FilterHeader {...props} />
            ),
         }}
      />
      <ConnectStack.Screen 
         name="Map" 
         component={Map} 
         options={{
            title:"Filter",
            header: (props) => (
               <MapHeader {...props} />
            ),
         }}
      />
   </ConnectStack.Navigator>
);

const styles = StyleSheet.create({
   filterHeaderRight: {
      color: '#B99A5B',
      fontSize: 16,
      fontWeight: '700',
      paddingRight: 18
   }
});