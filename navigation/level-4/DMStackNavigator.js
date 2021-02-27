import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DM from '../../features/dm/DM'; // should this be named DMScreen?
import { DMHeader } from '../../features/dm/DMHeader';

const DMStack = createStackNavigator();

export const DMStackNavigator = () => (
   <DMStack.Navigator>
      <DMStack.Screen 
         name="DM" 
         component={DM} 
         component={DM} 
         options={{
               title:"DM",
               header: (props) => (
                  <DMHeader {...props} />
               ),
         }}
      />
   </DMStack.Navigator>
);