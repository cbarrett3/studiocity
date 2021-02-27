import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../features/profile/Profile'; // should this be named ProfileScreen?

const ProfileStack = createStackNavigator();

export const ProfileStackNavigator = () => (
   <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{title:"Profile"}}/>
   </ProfileStack.Navigator>
);