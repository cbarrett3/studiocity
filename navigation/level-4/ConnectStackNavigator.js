import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Connect from '../../features/connect/Connect'; // should this be named ConnectScreen?
import { ConnectHeader } from '../../features/connect/ConnectHeader';

const ConnectStack = createStackNavigator();

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
   </ConnectStack.Navigator>
);


// next; do same thing for dm & profile stacks, and pass them into homebottomtabnavigator.js