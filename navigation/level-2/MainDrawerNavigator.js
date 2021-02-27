/* react */
import React from 'react';
/* navigation */
import { createDrawerNavigator } from '@react-navigation/drawer';
/* ui-kitten */
import { Text, DrawerItem, IndexPath, Icon } from '@ui-kitten/components';
/* screens */
import SettingsScreen from '../../features/settings/Settings';
import AdminScreen from '../../features/settings/Admin';
import PasswordForgetScreen from '../../features/auth/PasswordForget';
import PasswordChangeScreen from '../../features/settings/PasswordChange';
/* other components */
import { ThemedAwesomeDrawer } from '../../components/styledComponents/AwesomeDrawer'
import { HomeBottomTabNavigator } from '../level-3/HomeBottomTabNavigator'

/* TODO: refactor and get this main drawer working */
import { MainDrawer } from './MainDrawer';

/* icons */
const HomeIcon = (props) => (<Icon {...props} name='home-outline' />);
const SettingsIcon = (props) => (<Icon {...props} name='settings-outline' />);
const ForgotPasswordIcon = (props) => (<Icon {...props} name='edit-outline' />);
const ChangePasswordIcon = (props) => (<Icon {...props} name='edit-2-outline' />);
const AdminIcon = (props) => (<Icon {...props} name='clipboard-outline' />);
const ForwardIcon = (props) => (<Icon {...props} name='arrow-ios-forward' />);


// 2nd Level Drawer UI Kitten Component
const DrawerContent = ({ navigation, state }) => (
   <ThemedAwesomeDrawer selectedIndex={new IndexPath(state.index)} onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem
         title={<Text category='h6'>Home</Text>}
         accessoryLeft={HomeIcon}
         accessoryRight={ForwardIcon} 
      />
      <DrawerItem
         title={<Text category='h6'>Settings</Text>}
         accessoryLeft={SettingsIcon}
         accessoryRight={ForwardIcon} />
      {/* <DrawerItem
         title={<Text category='h6'>Forgot Password</Text>}
         accessoryLeft={ForgotPasswordIcon}
         accessoryRight={ForwardIcon} /> */}
      <DrawerItem
         title={<Text category='h6'>Change Password</Text>}
         accessoryLeft={ChangePasswordIcon}
         accessoryRight={ForwardIcon} />
      <DrawerItem
         title={<Text category='h6'>Admin</Text>}
         accessoryLeft={AdminIcon}
         accessoryRight={ForwardIcon} />
   </ThemedAwesomeDrawer>
);
// 2nd Level: Drawer Navigation
const DrawerNav = createDrawerNavigator();
export const MainDrawerNavigator = () => {
   return (
      <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props} />}>
         <DrawerNav.Screen name="Home" component={HomeBottomTabNavigator} />
         <DrawerNav.Screen name="Settings" component={SettingsScreen} />
         {/* <DrawerNav.Screen name="Password Forget" component={PasswordForgetScreen} /> */}
         <DrawerNav.Screen name="Password Change" component={PasswordChangeScreen} />
         <DrawerNav.Screen name="Admin" component={AdminScreen} />
      </DrawerNav.Navigator>
   );
};