import React from 'react';
import { Button, Icon, Layout, Input, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export const DMHeader = (props) => {
   const [value, setValue] = React.useState('');
   return (
      <>
         <Layout style={styles.headerContainer}>
            <Button
               appearance='ghost'
               accessoryLeft={MenuIcon}
               onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <Text style={styles.headerTitle} category='h6'> Messages </Text>
            <Button
               appearance='ghost'
               accessoryLeft={SettingsIcon}
            />
         </Layout>
         <Layout style={styles.searchLayout}>
            <Input
               placeholder='Search'
               value={value}
               onChangeText={nextValue => setValue(nextValue)}
            />
         </Layout>
      </>
   );
}

/* icons */
const MenuIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='menu-2-outline' />
);
const SettingsIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 24, height: 24 }]} name='settings-2-outline' />
);

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 35,
   },
   headerTitle: {
      paddingTop: 14,
   },
   searchLayout: {
      paddingHorizontal: 20,
   },
});