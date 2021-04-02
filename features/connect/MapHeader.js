import React from 'react';
import { Button, Icon, Layout, Input, Text } from '@ui-kitten/components';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const MapHeader = (props) => {
   const [value, setValue] = React.useState('');
   return (
      <>
         <Layout style={styles.headerContainer}>
            <Button
               appearance='ghost'
               activeOpacity='.2'
               accessoryLeft={BackIcon}
               onPress={() => props.navigation.goBack()}
            />
            {/* <Button appearance='ghost' activeOpacity='.2' onPress={() => props.navigation.navigate('Connect')} >
               <TouchableOpacity>
                  <Text style={styles.listButton}> List </Text>
               </TouchableOpacity>
            </Button> */}
            <Layout style={styles.searchLayout}>
               <Input
                  placeholder='Address, City, ZIP, Neighborhood'
                  value={value}
                  onChangeText={nextValue => setValue(nextValue)}
               />
            </Layout>
            <Button
               appearance='ghost'
               activeOpacity='.2'
               accessoryLeft={CurrentLocationIcon}
               // onPress={() => props.navigation.navigate('Filter')}
            />
            {/* <Button appearance='ghost' activeOpacity='.2' onPress={() => props.navigation.goBack()} >
               <TouchableOpacity>
                  <Text style={styles.listButton}> Filter </Text>
               </TouchableOpacity>
            </Button> */}
         </Layout>
      </>
   );
}

/* icons */
const BackIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='arrow-downward-outline' />
);
const CurrentLocationIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='navigation-2-outline' />
);
const FilterOutlineIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='funnel-outline' />
);

const styles = StyleSheet.create({
   listButton: {
      color: '#B99A5B',
      fontSize: 16,
      fontWeight: '700',
   },
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 35,
   },
   headerTitle: {
      paddingLeft: 17
   },
   searchLayout: {
      marginTop: 7,
      // width: '60%',
      // width: '75%'
      width: 220
   },
});