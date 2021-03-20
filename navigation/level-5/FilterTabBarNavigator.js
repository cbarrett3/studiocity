import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MusicFilter from '../../features/connect/MusicFilter'
import CameraFilter from '../../features/connect/CameraFilter'
import DesignFilter from '../../features/connect/DesignFilter'
import OtherFilter from '../../features/connect/OtherFilter'
import { FilterTabBar } from './FilterTabBar';

const TopTab = createMaterialTopTabNavigator();

/* pottentially control filter data in this component */

export const FilterTabBarNavigator = () => (
  <TopTab.Navigator 
      tabBarPosition="top" 
      keyboardDismissMode="auto" 
      initialRouteName="Music" 
      swipeEnabled="true"
      lazy="true"
      lazyPreloadDistance={1}
      tabBar={props => <FilterTabBar {...props} />}
   >
    <TopTab.Screen name="Music" component={MusicFilter} options={{title:"music"}} />
    <TopTab.Screen name="Video" component={CameraFilter} options={{title:"camera"}}/>
    {/* <TopTab.Screen name="Photo" component={PhotoFilter} options={{title:"photo"}}/> */}
    <TopTab.Screen name="Design" component={DesignFilter} options={{title:"design"}}/>
    <TopTab.Screen name="Other" component={OtherFilter} options={{title:"other"}}/>
  </TopTab.Navigator>
);