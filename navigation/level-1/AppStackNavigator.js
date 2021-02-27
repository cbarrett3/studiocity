/* react */
import React from 'react';
/* navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* other components */
import { AuthStackNavigator } from '../level-2/AuthStackNavigator';
import { MainDrawerNavigator } from '../level-2/MainDrawerNavigator';

const Stack = createStackNavigator();

export const AppStackNavigator = () => {
   const [isAuthenticated, setIsAuthenticated] = React.useState(true);
   return (
      <NavigationContainer>
         <Stack.Navigator headerMode='none'>
            { /* auth is the starter point of the app */}
            {!isAuthenticated ?
               <Stack.Screen name="Auth" component={AuthStackNavigator}/>
               :
               <Stack.Screen name="Home" component={MainDrawerNavigator} />
            }
         </Stack.Navigator>
      </NavigationContainer>
   )
};