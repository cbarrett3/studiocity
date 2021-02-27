import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PopularFeedScreen from '../../features/feed/PopularFeed';
import FollowingFeedScreen from '../../features/feed/FollowingFeed';
import { FeedTabBar } from './FeedTabBar';

const TopTab = createMaterialTopTabNavigator();

export const FeedTabBarNavigator = () => (
  <TopTab.Navigator tabBar={props => <FeedTabBar {...props} />}>
    <TopTab.Screen name="Popular" component={PopularFeedScreen} options={{title:"Popular"}} />
    <TopTab.Screen name="Following" component={FollowingFeedScreen} options={{title:"Following"}}/>
  </TopTab.Navigator>
);