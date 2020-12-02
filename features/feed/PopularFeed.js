import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';

export const StudioCityLogo = (props) => (
   <Icon {...props} name='studiocitylogo' pack='assets' />
 );

/* Connect screen */
const PopularFeedScreen = ( {navigation }) => {
  return (
      <Layout style={styles.container}>
          <Text category='h1'>Popular Posts...</Text>
          {/* <Button size='giant' appearance='ghost' accessoryLeft={StudioCityLogo}>Check the logo</Button> */}
          {/* <Image source={require('../../assets/images/studiocitylogo.png')} style={{ width: 31, height: 41 }}></Image> */}
      </Layout>
  )
}
export default PopularFeedScreen;

/* styles */
const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 