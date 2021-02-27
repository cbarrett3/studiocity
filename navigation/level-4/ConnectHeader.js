import React from 'react';
import { Button, Icon, Layout, Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

/* icons */
const MenuIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='menu-2-outline' />
);

export const ConnectHeader = (props) => {
   const [value, setValue] = React.useState('');
   return (
         <Layout style={styles.headerContainer}>
            <Button
               appearance='ghost'
               accessoryLeft={MenuIcon}
               onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <Layout style={styles.searchLayout}>
               <Input
                  placeholder='Search'
                  value={value}
                  onChangeText={nextValue => setValue(nextValue)}
               />
            </Layout>
            <Button
               appearance='ghost'
               accessoryLeft={NotificationIcon}
            />
         </Layout>
   );
}

const NotificationIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='bell-outline' />
);

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 35,
   },
   searchLayout: {
      marginTop: 7,
      width: '60%',
   },
});