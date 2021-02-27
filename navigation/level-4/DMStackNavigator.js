import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DM from '../../features/dm/DM'; // should this be named DMScreen?

const DMStack = createStackNavigator();

export const DMStackNavigator = () => (
   <DMStack.Navigator>
      <DMStack.Screen name="DM" component={DM} options={{title:"DM"}}/>
   </DMStack.Navigator>
);