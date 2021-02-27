/* Navigator Helper Component: 
   ---- Provides Feed Top Tab Bar Functionality
   ---> Passed into TopTab.Navigator as a tabBar prop in FeedTabBarNavigator.js
*/
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Tab, Button, Icon, Layout } from '@ui-kitten/components';
import { ThemedAwesomeTabBar } from '../../components/styledComponents/AwesomeTabBar';
import { DrawerActions } from '@react-navigation/native';

/* icons */
const MenuIcon = (props) => (
   <Icon {...props} name='menu-2-outline' />
);

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
         title={options.title}
      // icon={options.tabBarIcon}
      />
    );
  };

  return (
   <>
      <Layout style={styles.headerContainer}>
         <Layout style={styles.menuLayout}>
            <Button
               style={styles.menu}
               appearance='ghost'
               size='giant'
               accessoryLeft={MenuIcon}
               onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
         </Layout>
         <Layout style={styles.logoLayout}>
            <Image source={require('../../assets/images/studiocitylogo.png')} style={styles.logo}></Image>
         </Layout>
         <Layout style={styles.emptyLayout}>
            {/* <Image source={require('../../assets/images/studiocitylogo.png')} style={styles.logo}></Image> */}
         </Layout>
      </Layout>
      <ThemedAwesomeTabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
         {props.state.routes.map(createNavigationTabForRoute)}
      </ThemedAwesomeTabBar>
      {/* <Divider/> */}
   </>
  );
};

const styles = StyleSheet.create({
   headerContainer: {
     flexDirection: 'row',
     height: '10%',
     display: 'flex',
   },
   menuLayout: {
     flex: 1,
     justifyContent: 'center', // vertical
     alignItems: 'flex-start', // horizontal
   },
   logoLayout: {
      flex: 1,
      alignItems: 'center', 
   },
   emptyLayout: {
      flex: 1,
      alignItems: 'center', 
   },
   menu: {
      marginTop: '28%'
   },
   logo: {
      width: 25,
      height: 33,
      marginTop: '32%'
   }
 });