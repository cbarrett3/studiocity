import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';

/* styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* Landing screen */
const LandingScreen = ( {navigation }) => {
  return (
      <Layout style={styles.container}>
          <Text category='h1'>Landing Screen...</Text>
          <Button onPress={() => navigation.navigate('Sign In')}>
             Go to Sign In Page
         </Button>
      </Layout>
  )
}
export default LandingScreen;