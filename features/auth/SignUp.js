import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const SignUpScreen = ({ onSignUp, navigation }) => (
   <Layout style={styles.container}>
      <Text>Public Sign Up Screen</Text>
      <Button>
         Sign Up
      </Button>
   </Layout>
);
export default SignUpScreen;