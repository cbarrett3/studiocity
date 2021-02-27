/* Navigator Helper Component: 
   ---- Provides Feed Top Tab Bar Functionality
   ---> Passed into TopTab.Navigator as a tabBar prop in FeedTabBarNavigator.js
*/
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Tab, Button, Icon, Layout, Text } from '@ui-kitten/components';
import { TabBarStyledForFeed } from '../../components/styledComponents/TabBarStyledForFeedSC';
import { DrawerActions } from '@react-navigation/native';

export const FeedTabBar = (props) => {
   const onTabSelect = (index) => {
      const selectedTabRoute = props.state.routeNames[index];
      props.navigation.navigate(selectedTabRoute);
   };
   const createNavigationTabForRoute = (route) => {
      const { options } = props.descriptors[route.key];
      return (
         <Tab
            key={route.key}
            title={evaProps => <Text {...evaProps} >{options.title}</Text>}
         />
      );
   };
   return (
      <>
         <Layout style={styles.headerContainer}>
            <Button
               appearance='ghost'
               accessoryLeft={MenuIcon}
               onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <Layout style={styles.logoLayout}>
               <Image source={require('../../assets/images/studiocitylogo.png')} style={styles.logo}></Image>
            </Layout>
            <Button
               appearance='ghost'
               accessoryLeft={NotificationIcon}
            />
         </Layout>
         <TabBarStyledForFeed selectedIndex={props.state.index} onSelect={onTabSelect}>
            {props.state.routes.map(createNavigationTabForRoute)}
         </TabBarStyledForFeed>
      </>
   );
};

/* icons */
const MenuIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='menu-2-outline' />
);
const NotificationIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='bell-outline' />
);

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 35,
   },
   logoLayout: {
      marginTop: 7
   },
   logo: {
      width: 21,
      height: 28,
      /* keep 75 % ratio
      width: 21 or 24~25,
      height: 28 or 32, */
   }
});