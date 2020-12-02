import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const PasswordForgetScreen = ({ navigation }) => {
    return (
        <Layout style={styles.container}>
            <Button>
               Reset Password
            </Button>
        </Layout>
    );
};

export default PasswordForgetScreen;
