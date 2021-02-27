/* react */
import React, { useState } from 'react';
/* navigation */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
/* ui-kitten */
import { BottomNavigationTab, Icon } from '@ui-kitten/components';
/* screens */
import Connect from '../../features/connect/Connect';
import DM from '../../features/dm/DM';
import Profile from '../../features/profile/Profile';
/* other components */
import { ThemedAwesomeBottomNavigation } from '../../components/styledComponents/AwesomeBottomNavigation';
import { FeedTabBarNavigator } from '../level-4/FeedTabBarNavigator';
import { ConnectStackNavigator } from '../level-4/ConnectStackNavigator';
import { HomeBottomTab } from './HomeBottomTab';

/* icons */
const FeedIcon = (props) => (<Icon {...props} name='radio-outline' />);
const ConnectIcon = (props) => (<Icon {...props} name='globe-outline' />);
const DirectMessageIcon = (props) => (<Icon {...props} name='paper-plane-outline' />);
const ProfileIcon = (props) => (<Icon {...props} name='person-outline' />);



// 3rd Level Bottom Tab UI Kitten Component (old..)
const BottomTabBar = ({ navigation, state }) => {
   const [index, setTabIndex] = useState(0);
   return (
      <ThemedAwesomeBottomNavigation
         selectedIndex={state.index}
         onSelect={index => { setTabIndex(index), navigation.navigate(state.routeNames[index]) }}>
         <BottomNavigationTab icon={FeedIcon} title="Feed" />
         <BottomNavigationTab icon={ConnectIcon} title="Connect" />
         <BottomNavigationTab icon={DirectMessageIcon} title="DM" />
         <BottomNavigationTab icon={ProfileIcon} title="Profile" />
      </ThemedAwesomeBottomNavigation>
   )
};


// TESTING (BRING THESE TO DIFFERENT FILES PROBABLY)
const DMStack = createStackNavigator();
function DMStackScreen() {
   return (
     <DMStack.Navigator>
       <DMStack.Screen name="DM" component={DM} />
       {/* <DMStack.Screen name="Profile" component={ProfileScreen} /> */}
     </DMStack.Navigator>
   );
 }
// const ConnectStack = createStackNavigator();
// function ConnectStackScreen() {
//    return (
//      <ConnectStack.Navigator>
//        <ConnectStack.Screen name="Connect" component={Connect} />
//      </ConnectStack.Navigator>
//    );
//  }

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
   return (
     <ConnectStack.Navigator>
       <ConnectStack.Screen name="My Profile" component={Profile} />
       {/* <DMStack.Screen name="Profile" component={ProfileScreen} /> */}
     </ConnectStack.Navigator>
   );
 }


// 3rd Level: Bottom Tab Navigation nested within Drawer
const BottomTab = createBottomTabNavigator();
export const HomeBottomTabNavigator = () => {
   return (
      <BottomTab.Navigator tabBar={props => <HomeBottomTab {...props} />}>
         <BottomTab.Screen name='FEED' component={FeedTabBarNavigator} options={{title:"FEED", tabBarIcon: FeedIcon}} />
         <BottomTab.Screen name='CONNECT' component={ConnectStackNavigator} options={{title:"CONNECT", tabBarIcon: ConnectIcon}}/>
         <BottomTab.Screen name='DM' component={DMStackScreen} options={{title:"DM", tabBarIcon: DirectMessageIcon}}/>
         <BottomTab.Screen name='PROFILE' component={ProfileStackScreen} options={{title:"PROFILE", tabBarIcon: ProfileIcon}}/>
      </BottomTab.Navigator>
   );
};