import React from 'react';
import { Tab, Button, Icon, Layout, Input } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

/* icons */
const MenuIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='menu-2-outline' />
);

export const ConnectHeader = (props) => {
   const [value, setValue] = React.useState('');
   return (
      <>
         <Layout style={styles.headerContainer}>
            <Layout style={styles.menuLayout}>
               <Button
                  style={styles.menuIcon}
                  appearance='ghost'
                  // size='giant'
                  accessoryLeft={MenuIcon}
                  onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
               />
            </Layout>
            <Layout style={styles.searchLayout}>
               {/* <Image source={require('../../assets/images/studiocitylogo.png')} style={styles.logo}></Image>
                */}
               <Input
                  placeholder='Search'
                  value={value}
                  onChangeText={nextValue => setValue(nextValue)}
               />
            </Layout>
            <Layout style={styles.emptyLayout}>
            </Layout>
         </Layout>
         {/* <Divider/> */}
      </>
   );
}

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: 'row',
      //   height: '10%',
      display: 'flex',
      color: 'white'
   },
   menuLayout: {
      flex: 1,
      justifyContent: 'center', // vertical
      alignItems: 'flex-start', // horizontal
   },
   searchLayout: {
      marginTop: '10.5%',
      alignItems: 'center',
   },
   emptyLayout: {
      flex: 1,
      alignItems: 'center',
   },
   menuIcon: {
      marginTop: '21.5%',
   },
   logo: {
      width: 24,
      height: 31,
      marginTop: '28%'
   }
});