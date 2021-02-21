/* UI Kitten Component for Feed Top Tab Bar */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabBar, Tab, Button, Icon, Divider, TabElement, Text, Layout } from '@ui-kitten/components';
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
      // justifyContent: 'center',
      alignItems: 'center', 
      // backgroundColor: 'blue'
   },
   emptyLayout: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center', 
      // backgroundColor: 'blue'
   },
   menu: {
      marginTop: '28%'
   },
   logo: {
      width: 25,
      // width: '15%',
      height: 33,
      // height: '100%',
      // height: '35%',
      marginTop: '32%'
   }
 });

// const styles = StyleSheet.create ({
//    logo: {
//       width: 24,
//       height: 31,
//       // marginTop: 40,
//       // marginTop: '10%',
//       justifyContent: 'center',
//    },
//    menu: {
//       marginTop: '20%',
//       justifyContent: 'flex-start',
//    },
//    TopContainer: {
//       height: 75,
//       width: '100%',
//       alignItems: 'flex-end', // bottom of container
//       justifyContent: 'center',
//       flexDirection: 'row'
//    },
//    // const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         flexDirection: 'row',
//       },
//       layout: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//    //  });
// });