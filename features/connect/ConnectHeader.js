import React from 'react';
import { Button, Icon, Layout, Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export const ConnectHeader = (props) => {
   const [value, setValue] = React.useState('');
   return (
      <Layout style={styles.headerContainer}>
         <Button
            appearance='ghost'
            activeOpacity='.2'
            accessoryLeft={MapIcon}
            // onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            onPress={() => props.navigation.navigate('Map')}
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
            activeOpacity='.2'
            accessoryLeft={FilterOutlineIcon}
            onPress={() => props.navigation.navigate('Filter')}
            // accessoryLeft={FilterFilledIcon}
         />
      </Layout>
   );
}

/* icons */
const FilterOutlineIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='funnel-outline' />
);
const FilterFilledIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='funnel' />
);
const MapIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='map-outline' />
);

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 35,
   },
   searchLayout: {
      marginTop: 7,
      // width: '60%',
      width: 235
   },
});