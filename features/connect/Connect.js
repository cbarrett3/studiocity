import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

/* styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* Connect screen */
const Connect = ( {navigation }) => {
  return (
      <Layout style={styles.container}>
         {/* TODO: search bar, filters, etc. */}
          <Text category='h1'>Connect with other creatives...</Text>
      </Layout>
  )
}
export default Connect;