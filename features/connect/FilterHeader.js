import React from 'react';
import { Button, Icon, Layout, Input, Text} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const FilterHeader = (props) => {
   return (
      <>
         <Layout style={styles.headerContainer}>
            <Button
               appearance='ghost'
               accessoryLeft={BackIcon}
               onPress={() => props.navigation.goBack()}
            /> 
            <Text style={styles.headerTitle} category='h6'> Filters </Text>
            <Button appearance='ghost' >
               <Text style={styles.resetButton}> Reset All </Text>
            </Button>
         </Layout>
      </>
   );
}

/* icons */
const BackIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='arrow-back' />
);

const styles = StyleSheet.create({
   resetButton: {
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
});