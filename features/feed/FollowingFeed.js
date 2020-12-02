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

/* Following screen */
const FollowingFeedScreen = ( {navigation }) => {
  return (
      <Layout style={styles.container}>
          <Text category='h1'>Following Posts...</Text>
      </Layout>
  )
}
export default FollowingFeedScreen;