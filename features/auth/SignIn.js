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

const SignInScreen = ({ onSignIn, navigation }) => (
   <Layout style={styles.container}>
      <Text>Public Sign In Screen</Text>
      <Button>
         Sign In
      </Button>
      <Text>OR</Text>
      <Button onPress={() => navigation.navigate('Sign Up')}>
         Go to Sign Up 
      </Button>
      <Text>OR</Text>
      <Button onPress={() => navigation.navigate('Password Forget')}>
        Go to Password Forget
      </Button>
   </Layout>
);
export default SignInScreen;