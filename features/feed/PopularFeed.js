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
const PopularFeedScreen = ( {navigation }) => {
  return (
      <Layout style={styles.container}>
          <Text category='h1'>Popular Posts...</Text>
      </Layout>
  )
}
export default PopularFeedScreen;