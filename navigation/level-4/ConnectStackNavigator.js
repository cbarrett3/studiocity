/* todo: refactor header components to just use options props instead to improve performance*/
import React from 'react';
import { StyleSheet, BlurView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import Connect from '../../features/connect/Connect'; // should this be named ConnectScreen?
import Filter from '../../features/connect/Filter'; // should this be named FilterScreen?
import Map from '../../features/connect/Map'; // should this be named MapScreen?
import { ConnectHeader } from '../../features/connect/ConnectHeader';
import { FilterHeader } from '../../features/connect/FilterHeader';

const ConnectStack = createStackNavigator();

const filterHeaderRight = () => {
   return <Text>Hola</Text>
}

export const ConnectStackNavigator = () => (
   <ConnectStack.Navigator>
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
         component={Filter} 
         options={{
            // title:"Filter",
            // headerTransparent: false,
            // headerTitle: 'Filters',
            // headerTitleAlign: 'center',
            // headerBackTitle: 'connect',
            // headerBackTitleVisible: true,
            // headerRight: () => (<Text style={styles.filterHeaderRight} category='s1'>Reset All</Text>),
            // animationTypeForReplace: 'push',
            header: (props) => (
               <FilterHeader {...props} />
            ),
         }}
      />
      <ConnectStack.Screen 
         name="Map" 
         component={Map} 
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