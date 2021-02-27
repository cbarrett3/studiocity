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
import { ThemedAwesomeBottomNavigation } from '../../components/styledComponents/BottomNavigationStyledForHomeSC';
import { FeedTabBarNavigator } from '../level-4/FeedTabBarNavigator';
import { ConnectStackNavigator } from '../level-4/ConnectStackNavigator';
import { DMStackNavigator } from '../level-4/DMStackNavigator';
import { ProfileStackNavigator } from '../level-4/ProfileStackNavigator';
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

// 3rd Level: Bottom Tab Navigation nested within Drawer
const BottomTab = createBottomTabNavigator();
export const HomeBottomTabNavigator = () => {
   return (
      <BottomTab.Navigator tabBar={props => <HomeBottomTab {...props} />}>
         <BottomTab.Screen name='FEED' component={FeedTabBarNavigator} options={{title:"feed", tabBarIcon: FeedIcon}} />
         <BottomTab.Screen name='CONNECT' component={ConnectStackNavigator} options={{title:"connect", tabBarIcon: ConnectIcon}}/>
         <BottomTab.Screen name='DM' component={DMStackNavigator} options={{title:"dm", tabBarIcon: DirectMessageIcon}}/>
         <BottomTab.Screen name='PROFILE' component={ProfileStackNavigator} options={{title:"profile", tabBarIcon: ProfileIcon}}/>
      </BottomTab.Navigator>
   );
};