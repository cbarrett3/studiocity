import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Layout, Button } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const PasswordChangeScreen = ({ navigation }) => {
    return (
        <Layout style={styles.container}>
            <Button>
               Change Password
            </Button>
        </Layout>
    );
};

export default PasswordChangeScreen;
